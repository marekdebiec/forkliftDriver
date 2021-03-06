// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'

// Upgrade NOTE: replaced '_Object2World' with 'unity_ObjectToWorld'

// Upgrade NOTE: commented out 'float4 unity_LightmapST', a built-in variable
// Upgrade NOTE: commented out 'sampler2D unity_Lightmap', a built-in variable
// Upgrade NOTE: commented out 'sampler2D unity_LightmapInd', a built-in variable
// Upgrade NOTE: replaced tex2D unity_Lightmap with UNITY_SAMPLE_TEX2D
// Upgrade NOTE: replaced tex2D unity_LightmapInd with UNITY_SAMPLE_TEX2D_SAMPLER

Shader "GoHDR/Transparent/Cutout/Specular" {
	Properties {
		_Color ("Main Color", Color) = (1,1,1,1)
		_SpecColor ("Specular Color", Color) = (0.5, 0.5, 0.5, 0)
		_Shininess ("Shininess", Range (0.01, 1)) = 0.078125
		_MainTex ("Base (RGB) TransGloss (A)", 2D) = "white" {}
		
		_Cutoff ("Alpha cutoff", Range(0,1)) = 0.5
		
	}
	
	SubShader {
		Tags {"Queue"="AlphaTest" "IgnoreProjector"="True" "RenderType"="TransparentCutout"}
		
		LOD 300
		
		Pass {
			Name "FORWARD"
			Tags { "LightMode" = "ForwardBase" }
			
			ColorMask RGB
			
			CGPROGRAM
			
			#include "../GoHDR.cginc"
			#include "../LinLighting.cginc"
			#pragma vertex vert_surf
			#pragma fragment frag_surf
			#pragma fragmentoption ARB_precision_hint_fastest
			#pragma multi_compile_fwdbase
			#include "HLSLSupport.cginc"
			#include "UnityShaderVariables.cginc"
			#define UNITY_PASS_FORWARDBASE
			#include "../UnityCGGoHDR.cginc"
			#include "Lighting.cginc"
			#include "AutoLight.cginc"
			
			#define INTERNAL_DATA
			#define WorldReflectionVector(data,normal) data.worldRefl
			#define WorldNormalVector(data,normal) normal
			
			sampler2D _MainTex;
			fixed4 _Color;
			half _Shininess;
			
			struct Input {
				float2 uv_MainTex;
			};
			
			void surf (Input IN, inout SurfaceOutput o) {
				fixed4 tex = LLDecodeTex( tex2D(_MainTex, IN.uv_MainTex) );
				o.Albedo = tex.rgb * LLDecodeGamma( _Color.rgb );
				o.Gloss = tex.a;
				o.Alpha = tex.a * LLDecodeGamma( _Color.a );
				o.Specular = _Shininess;
			}
			
			#ifdef LIGHTMAP_OFF
				struct v2f_surf {
					float4 pos : SV_POSITION;
					float2 pack0 : TEXCOORD0;
					fixed3 normal : TEXCOORD1;
					fixed3 vlight : TEXCOORD2;
					float3 viewDir : TEXCOORD3;
					LIGHTING_COORDS(4,5)
				};
			#endif
			
			#ifndef LIGHTMAP_OFF
				struct v2f_surf {
					float4 pos : SV_POSITION;
					float2 pack0 : TEXCOORD0;
					float2 lmap : TEXCOORD1;
					
					#ifndef DIRLIGHTMAP_OFF
						float3 viewDir : TEXCOORD2;
						LIGHTING_COORDS(3,4)
						#else
						LIGHTING_COORDS(2,3)
					#endif
				};
			#endif
			
			#ifndef LIGHTMAP_OFF
				// float4 unity_LightmapST;
			#endif
			
			float4 _MainTex_ST;
			
			v2f_surf vert_surf (appdata_full v) {
				v2f_surf o;
				o.pos = UnityObjectToClipPos (v.vertex);
				o.pack0.xy = TRANSFORM_TEX(v.texcoord, _MainTex);
				
				#ifndef LIGHTMAP_OFF
					o.lmap.xy = v.texcoord1.xy * unity_LightmapST.xy + unity_LightmapST.zw;
				#endif
				
				float3 worldN = mul((float3x3)unity_ObjectToWorld, SCALED_NORMAL);
				
				#ifdef LIGHTMAP_OFF
					o.normal = worldN;
				#endif
				
				#ifndef DIRLIGHTMAP_OFF
					TANGENT_SPACE_ROTATION;
					float3 viewDirForLight = mul (rotation, ObjSpaceViewDir(v.vertex));
					o.viewDir = viewDirForLight;
					#else
					
					#ifdef LIGHTMAP_OFF
						float3 viewDirForLight = WorldSpaceViewDir( v.vertex );
						o.viewDir = viewDirForLight;
					#endif

				#endif
				
				#ifdef LIGHTMAP_OFF
					float3 shlight = ShadeSH9 (float4(worldN,1.0));
					o.vlight = shlight;
					
					#ifdef VERTEXLIGHT_ON
						float3 worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
						o.vlight += Shade4PointLights (
						unity_4LightPosX0, unity_4LightPosY0, unity_4LightPosZ0,
						unity_LightColor[0].rgb, unity_LightColor[1].rgb, unity_LightColor[2].rgb, unity_LightColor[3].rgb,
						unity_4LightAtten0, worldPos, worldN );
					#endif

				#endif
				
				TRANSFER_VERTEX_TO_FRAGMENT(o);
				return o;
			}
			
			#ifndef LIGHTMAP_OFF
				// sampler2D unity_Lightmap;
				
				#ifndef DIRLIGHTMAP_OFF
					// sampler2D unity_LightmapInd;
				#endif

			#endif
			
			fixed _Cutoff;
			
			fixed4 frag_surf (v2f_surf IN) : COLOR {
				Input surfIN;
				surfIN.uv_MainTex = IN.pack0.xy;
				
				#ifdef UNITY_COMPILER_HLSL
					SurfaceOutput o = (SurfaceOutput)0;
					#else
					SurfaceOutput o;
				#endif
				
				o.Albedo = 0.0;
				o.Emission = 0.0;
				o.Specular = 0.0;
				o.Alpha = 0.0;
				o.Gloss = 0.0;
				
				#ifdef LIGHTMAP_OFF
					o.Normal = IN.normal;
				#endif
				
				surf (surfIN, o);
				clip (o.Alpha - _Cutoff);
				fixed atten = LIGHT_ATTENUATION(IN);
				fixed4 c = 0;
				
				#ifdef LIGHTMAP_OFF
					c = LightingBlinnPhong (o, _WorldSpaceLightPos0.xyz, normalize(half3(IN.viewDir)), atten);
				#endif
				
				#ifdef LIGHTMAP_OFF
					c.rgb += o.Albedo * IN.vlight;
				#endif
				
				#ifndef LIGHTMAP_OFF
					
					#ifndef DIRLIGHTMAP_OFF
						o.Normal = half3(0,0,1);
						half3 specColor;
						fixed4 lmtex = UNITY_SAMPLE_TEX2D(unity_Lightmap, IN.lmap.xy);
						fixed4 lmIndTex = UNITY_SAMPLE_TEX2D_SAMPLER(unity_LightmapInd,unity_Lightmap, IN.lmap.xy);
						half3 lm = LightingBlinnPhong_DirLightmap(o, lmtex, lmIndTex, normalize(half3(IN.viewDir)), 0, specColor).rgb;
						c.rgb += specColor;
						#else 
						fixed4 lmtex = UNITY_SAMPLE_TEX2D(unity_Lightmap, IN.lmap.xy);
						fixed3 lm = DecodeLightmap (lmtex);
					#endif
					
					#ifdef SHADOWS_SCREEN
						#if (defined(SHADER_API_GLES) || defined(SHADER_API_GLES3)) && defined(SHADER_API_MOBILE)
						c.rgb += o.Albedo * min(lm, atten*2);
						#else
						c.rgb += o.Albedo * max(min(lm,(atten*2)*lmtex.rgb), lm*atten);
					#endif
					
					#else 
					c.rgb += o.Albedo * lm;
				#endif
				
				c.a = o.Alpha;
			#endif
			
			c.a = o.Alpha;
			
			return LLEncodeGamma( GoHDRApplyCorrection( c ) );
		}
		
		ENDCG
	}
	
	Pass {
		Name "FORWARD"
		Tags { "LightMode" = "ForwardAdd" }
		ZWrite Off Blend One One Fog { Color (0,0,0,0) }
		
		ColorMask RGB
		
		CGPROGRAM
		
		#include "../GoHDR.cginc"
		#include "../LinLighting.cginc"
		#pragma vertex vert_surf
		#pragma fragment frag_surf
		#pragma fragmentoption ARB_precision_hint_fastest
		#pragma multi_compile_fwdadd
		#include "HLSLSupport.cginc"
		#include "UnityShaderVariables.cginc"
		#define UNITY_PASS_FORWARDADD
		#include "../UnityCGGoHDR.cginc"
		#include "Lighting.cginc"
		#include "AutoLight.cginc"
		
		#define INTERNAL_DATA
		#define WorldReflectionVector(data,normal) data.worldRefl
		#define WorldNormalVector(data,normal) normal
		
		sampler2D _MainTex;
		fixed4 _Color;
		half _Shininess;
		
		struct Input {
			float2 uv_MainTex;
		};
		
		void surf (Input IN, inout SurfaceOutput o) {
			fixed4 tex = LLDecodeTex( tex2D(_MainTex, IN.uv_MainTex) );
			o.Albedo = tex.rgb * LLDecodeGamma( _Color.rgb );
			o.Gloss = tex.a;
			o.Alpha = tex.a * LLDecodeGamma( _Color.a );
			o.Specular = _Shininess;
		}
		
		struct v2f_surf {
			float4 pos : SV_POSITION;
			float2 pack0 : TEXCOORD0;
			fixed3 normal : TEXCOORD1;
			half3 lightDir : TEXCOORD2;
			half3 viewDir : TEXCOORD3;
			LIGHTING_COORDS(4,5)
		};
		
		float4 _MainTex_ST;
		
		v2f_surf vert_surf (appdata_full v) {
			v2f_surf o;
			o.pos = UnityObjectToClipPos (v.vertex);
			o.pack0.xy = TRANSFORM_TEX(v.texcoord, _MainTex);
			o.normal = mul((float3x3)unity_ObjectToWorld, SCALED_NORMAL);
			float3 lightDir = WorldSpaceLightDir( v.vertex );
			o.lightDir = lightDir;
			float3 viewDirForLight = WorldSpaceViewDir( v.vertex );
			o.viewDir = viewDirForLight;
			TRANSFER_VERTEX_TO_FRAGMENT(o);
			return o;
		}
		
		fixed _Cutoff;
		
		fixed4 frag_surf (v2f_surf IN) : COLOR {
			Input surfIN;
			surfIN.uv_MainTex = IN.pack0.xy;
			
			#ifdef UNITY_COMPILER_HLSL
				SurfaceOutput o = (SurfaceOutput)0;
				#else
				SurfaceOutput o;
			#endif
			
			o.Albedo = 0.0;
			o.Emission = 0.0;
			o.Specular = 0.0;
			o.Alpha = 0.0;
			o.Gloss = 0.0;
			o.Normal = IN.normal;
			surf (surfIN, o);
			clip (o.Alpha - _Cutoff);
			
			#ifndef USING_DIRECTIONAL_LIGHT
				fixed3 lightDir = normalize(IN.lightDir);
				#else
				fixed3 lightDir = IN.lightDir;
			#endif
			
			fixed4 c = LightingBlinnPhong (o, lightDir, normalize(half3(IN.viewDir)), LIGHT_ATTENUATION(IN));
			c.a = o.Alpha;
			
			return LLEncodeGamma( GoHDRApplyCorrection( c ) );
		}
		
		ENDCG
	}
	
	Pass {
		Name "PREPASS"
		Tags { "LightMode" = "PrePassBase" }
		Fog {Mode Off}
		
		CGPROGRAM
		
		#include "../GoHDR.cginc"
		#include "../LinLighting.cginc"
		#pragma vertex vert_surf
		#pragma fragment frag_surf
		#pragma fragmentoption ARB_precision_hint_fastest
		
		#include "HLSLSupport.cginc"
		#include "UnityShaderVariables.cginc"
		#define UNITY_PASS_PREPASSBASE
		#include "../UnityCGGoHDR.cginc"
		#include "Lighting.cginc"
		
		#define INTERNAL_DATA
		#define WorldReflectionVector(data,normal) data.worldRefl
		#define WorldNormalVector(data,normal) normal
		
		sampler2D _MainTex;
		fixed4 _Color;
		half _Shininess;
		
		struct Input {
			float2 uv_MainTex;
		};
		
		void surf (Input IN, inout SurfaceOutput o) {
			fixed4 tex = LLDecodeTex( tex2D(_MainTex, IN.uv_MainTex) );
			o.Albedo = tex.rgb * LLDecodeGamma( _Color.rgb );
			o.Gloss = tex.a;
			o.Alpha = tex.a * LLDecodeGamma( _Color.a );
			o.Specular = _Shininess;
		}
		
		struct v2f_surf {
			float4 pos : SV_POSITION;
			float2 pack0 : TEXCOORD0;
			fixed3 normal : TEXCOORD1;
		};
		
		float4 _MainTex_ST;
		
		v2f_surf vert_surf (appdata_full v) {
			v2f_surf o;
			o.pos = UnityObjectToClipPos (v.vertex);
			o.pack0.xy = TRANSFORM_TEX(v.texcoord, _MainTex);
			o.normal = mul((float3x3)unity_ObjectToWorld, SCALED_NORMAL);
			return o;
		}
		
		fixed _Cutoff;
		
		fixed4 frag_surf (v2f_surf IN) : COLOR {
			Input surfIN;
			surfIN.uv_MainTex = IN.pack0.xy;
			
			#ifdef UNITY_COMPILER_HLSL
				SurfaceOutput o = (SurfaceOutput)0;
				#else
				SurfaceOutput o;
			#endif
			
			o.Albedo = 0.0;
			o.Emission = 0.0;
			o.Specular = 0.0;
			o.Alpha = 0.0;
			o.Gloss = 0.0;
			o.Normal = IN.normal;
			surf (surfIN, o);
			clip (o.Alpha - _Cutoff);
			fixed4 res;
			res.rgb = o.Normal * 0.5 + 0.5;
			res.a = o.Specular;
			
			return LLEncodeGamma( GoHDRApplyCorrection( res ) );
		}
		
		ENDCG
	}
	
	Pass {
		Name "PREPASS"
		Tags { "LightMode" = "PrePassFinal" }
		
		ZWrite Off
		
		CGPROGRAM
		
		#include "../GoHDR.cginc"
		#include "../LinLighting.cginc"
		#pragma vertex vert_surf
		#pragma fragment frag_surf
		#pragma fragmentoption ARB_precision_hint_fastest
		#pragma multi_compile_prepassfinal
		#include "HLSLSupport.cginc"
		#include "UnityShaderVariables.cginc"
		#define UNITY_PASS_PREPASSFINAL
		#include "../UnityCGGoHDR.cginc"
		#include "Lighting.cginc"
		
		#define INTERNAL_DATA
		#define WorldReflectionVector(data,normal) data.worldRefl
		#define WorldNormalVector(data,normal) normal
		
		sampler2D _MainTex;
		fixed4 _Color;
		half _Shininess;
		
		struct Input {
			float2 uv_MainTex;
		};
		
		void surf (Input IN, inout SurfaceOutput o) {
			fixed4 tex = LLDecodeTex( tex2D(_MainTex, IN.uv_MainTex) );
			o.Albedo = tex.rgb * LLDecodeGamma( _Color.rgb );
			o.Gloss = tex.a;
			o.Alpha = tex.a * LLDecodeGamma( _Color.a );
			o.Specular = _Shininess;
		}
		
		struct v2f_surf {
			float4 pos : SV_POSITION;
			float2 pack0 : TEXCOORD0;
			float4 screen : TEXCOORD1;
			
			#ifdef LIGHTMAP_OFF
				float3 vlight : TEXCOORD2;
				#else
				float2 lmap : TEXCOORD2;
				
				#ifdef DIRLIGHTMAP_OFF
					float4 lmapFadePos : TEXCOORD3;
					#else
					float3 viewDir : TEXCOORD3;
				#endif

			#endif
		};
		
		#ifndef LIGHTMAP_OFF
			// float4 unity_LightmapST;
		#endif
		
		float4 _MainTex_ST;
		
		v2f_surf vert_surf (appdata_full v) {
			v2f_surf o;
			o.pos = UnityObjectToClipPos (v.vertex);
			o.pack0.xy = TRANSFORM_TEX(v.texcoord, _MainTex);
			o.screen = ComputeScreenPos (o.pos);
			
			#ifndef LIGHTMAP_OFF
				o.lmap.xy = v.texcoord1.xy * unity_LightmapST.xy + unity_LightmapST.zw;
				
				#ifdef DIRLIGHTMAP_OFF
					o.lmapFadePos.xyz = (mul(unity_ObjectToWorld, v.vertex).xyz - unity_ShadowFadeCenterAndType.xyz) * unity_ShadowFadeCenterAndType.w;
					o.lmapFadePos.w = (-mul(UNITY_MATRIX_MV, v.vertex).z) * (1.0 - unity_ShadowFadeCenterAndType.w);
				#endif
				
				#else
				float3 worldN = mul((float3x3)unity_ObjectToWorld, SCALED_NORMAL);
				o.vlight = ShadeSH9 (float4(worldN,1.0));
			#endif
			
			#ifndef DIRLIGHTMAP_OFF
				TANGENT_SPACE_ROTATION;
				o.viewDir = mul (rotation, ObjSpaceViewDir(v.vertex));
			#endif
			
			return o;
		}
		
		sampler2D _LightBuffer;
		#if defined (SHADER_API_XBOX360) && defined (HDR_LIGHT_PREPASS_ON)
			sampler2D _LightSpecBuffer;
		#endif
		
		#ifndef LIGHTMAP_OFF
			// sampler2D unity_Lightmap;
			// sampler2D unity_LightmapInd;
			float4 unity_LightmapFade;
		#endif
		
		fixed4 unity_Ambient;
		fixed _Cutoff;
		
		fixed4 frag_surf (v2f_surf IN) : COLOR {
			Input surfIN;
			surfIN.uv_MainTex = IN.pack0.xy;
			
			#ifdef UNITY_COMPILER_HLSL
				SurfaceOutput o = (SurfaceOutput)0;
				#else
				SurfaceOutput o;
			#endif
			
			o.Albedo = 0.0;
			o.Emission = 0.0;
			o.Specular = 0.0;
			o.Alpha = 0.0;
			o.Gloss = 0.0;
			surf (surfIN, o);
			clip (o.Alpha - _Cutoff);
			half4 light = tex2Dproj (_LightBuffer, UNITY_PROJ_COORD(IN.screen));
			#if defined (SHADER_API_GLES) || defined (SHADER_API_GLES3)
				light = max(light, half4(0.001));
			#endif
			
			#ifndef HDR_LIGHT_PREPASS_ON
				light = -log2(light);
			#endif
			
			#if defined (SHADER_API_XBOX360) && defined (HDR_LIGHT_PREPASS_ON)
				light.w = tex2Dproj (_LightSpecBuffer, UNITY_PROJ_COORD(IN.screen)).r;
			#endif
			
			#ifndef LIGHTMAP_OFF
				
				#ifdef DIRLIGHTMAP_OFF
					fixed4 lmtex = UNITY_SAMPLE_TEX2D(unity_Lightmap, IN.lmap.xy);
					fixed4 lmtex2 = UNITY_SAMPLE_TEX2D_SAMPLER(unity_LightmapInd,unity_Lightmap, IN.lmap.xy);
					half lmFade = length (IN.lmapFadePos) * unity_LightmapFade.z + unity_LightmapFade.w;
					half3 lmFull = DecodeLightmap (lmtex);
					half3 lmIndirect = DecodeLightmap (lmtex2);
					half3 lm = lerp (lmIndirect, lmFull, saturate(lmFade));
					light.rgb += lm;
					#else
					o.Normal = half3(0,0,1);
					half3 specColor;
					fixed4 lmtex = UNITY_SAMPLE_TEX2D(unity_Lightmap, IN.lmap.xy);
					fixed4 lmIndTex = UNITY_SAMPLE_TEX2D_SAMPLER(unity_LightmapInd,unity_Lightmap, IN.lmap.xy);
					half4 lm = LightingBlinnPhong_DirLightmap(o, lmtex, lmIndTex, normalize(half3(IN.viewDir)), 0, specColor);
					light += lm;
				#endif
				
				#else
				light.rgb += IN.vlight;
			#endif
			
			half4 c = LightingBlinnPhong_PrePass (o, light);
			
			return LLEncodeGamma( GoHDRApplyCorrection( c ) );
		}
		
		ENDCG
	}
}

Fallback "GoHDR/Transparent/Cutout/VertexLit CG"
}


//Original shader:

//Shader "Transparent/Cutout/Specular" {
//Properties {
//	_Color ("Main Color", Color) = (1,1,1,1)
//	_SpecColor ("Specular Color", Color) = (0.5, 0.5, 0.5, 0)
//	_Shininess ("Shininess", Range (0.01, 1)) = 0.078125
//	_MainTex ("Base (RGB) TransGloss (A)", 2D) = "white" {}
//	_Cutoff ("Alpha cutoff", Range(0,1)) = 0.5
//}
//
//SubShader {
//	Tags {"Queue"="AlphaTest" "IgnoreProjector"="True" "RenderType"="TransparentCutout"}
//	LOD 300
//
//CGPROGRAM
//#pragma surface surf BlinnPhong alphatest:_Cutoff
//
//sampler2D _MainTex;
//fixed4 _Color;
//half _Shininess;
//
//struct Input {
//	float2 uv_MainTex;
//};
//
//void surf (Input IN, inout SurfaceOutput o) {
//	fixed4 tex = tex2D(_MainTex, IN.uv_MainTex);
//	o.Albedo = tex.rgb * _Color.rgb;
//	o.Gloss = tex.a;
//	o.Alpha = tex.a * _Color.a;
//	o.Specular = _Shininess;
//}
//ENDCG
//}
//
//Fallback "Transparent/Cutout/VertexLit"
//}
