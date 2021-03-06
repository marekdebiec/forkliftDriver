// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'

// Upgrade NOTE: replaced '_Object2World' with 'unity_ObjectToWorld'

// Upgrade NOTE: commented out 'float4 unity_LightmapST', a built-in variable
// Upgrade NOTE: commented out 'sampler2D unity_Lightmap', a built-in variable
// Upgrade NOTE: commented out 'sampler2D unity_LightmapInd', a built-in variable
// Upgrade NOTE: replaced tex2D unity_Lightmap with UNITY_SAMPLE_TEX2D
// Upgrade NOTE: replaced tex2D unity_LightmapInd with UNITY_SAMPLE_TEX2D_SAMPLER

Shader "Hidden/GoHDR/Luminosity HQ" {
Properties {
//	_Color ("Main Color", Color) = (1,1,1,1)
	_MainTex ("Base (RGB) Gloss (A)", 2D) = "white" {}

}
SubShader {
	Tags { "RenderType"="Opaque" }
	LOD 200
	
	Pass {
		Name "FORWARD"
		Tags { "LightMode" = "ForwardBase" }
		
		CGPROGRAM
		#pragma vertex vert_surf
		#pragma fragment frag_surf
		#pragma fragmentoption ARB_precision_hint_fastest
		#pragma multi_compile_fwdbase
		#include "HLSLSupport.cginc"
		#include "UnityShaderVariables.cginc"
		#define UNITY_PASS_FORWARDBASE
		#include "UnityCG.cginc"
		#include "Lighting.cginc"
		#include "AutoLight.cginc"
		
		#define INTERNAL_DATA
		#define WorldReflectionVector(data,normal) data.worldRefl
		#define WorldNormalVector(data,normal) normal
		
		sampler2D _MainTex;
//		fixed4 _Color;

		
//		struct Input {
//			float2 uv_MainTex;
//		};
		
		#ifdef LIGHTMAP_OFF
		struct v2f_surf {
		  float4 pos : SV_POSITION;
		  float2 pack0 : TEXCOORD0;
		  fixed3 normal : TEXCOORD1;
		  fixed3 vlight : TEXCOORD2;
		  LIGHTING_COORDS(3,4)
		};
		#endif
		#ifndef LIGHTMAP_OFF
		struct v2f_surf {
		  float4 pos : SV_POSITION;
		  float2 pack0 : TEXCOORD0;
		  float2 lmap : TEXCOORD1;
		  LIGHTING_COORDS(2,3)
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
		  #ifdef LIGHTMAP_OFF
		  float3 shlight = ShadeSH9 (float4(worldN,1.0));
		  o.vlight = shlight;
		  #ifdef VERTEXLIGHT_ON
		  float3 worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
		  o.vlight += Shade4PointLights (
		    unity_4LightPosX0, unity_4LightPosY0, unity_4LightPosZ0,
		    unity_LightColor[0].rgb, unity_LightColor[1].rgb, unity_LightColor[2].rgb, unity_LightColor[3].rgb,
		    unity_4LightAtten0, worldPos, worldN );
		  #endif // VERTEXLIGHT_ON
		  #endif // LIGHTMAP_OFF
		  TRANSFER_VERTEX_TO_FRAGMENT(o);
		  return o;
		}
		#ifndef LIGHTMAP_OFF
		// sampler2D unity_Lightmap;
		#ifndef DIRLIGHTMAP_OFF
		// sampler2D unity_LightmapInd;
		#endif
		#endif
		fixed4 frag_surf (v2f_surf IN) : COLOR {
//		  Input surfIN;
//		  surfIN.uv_MainTex = IN.pack0.xy;
		  #ifdef UNITY_COMPILER_HLSL
		  SurfaceOutput o = (SurfaceOutput)0;
		  #else
		  SurfaceOutput o;
		  #endif
		  //o.Albedo = 1.0;
		  o.Albedo = tex2D(_MainTex, IN.pack0.xy);// * _Color;
		  o.Emission = 0.0;
		  o.Specular = 0.0;
		  o.Alpha = 0.0;
		  o.Gloss = 0.0;
		  #ifdef LIGHTMAP_OFF
		  o.Normal = IN.normal;
		  #endif
		  fixed atten = LIGHT_ATTENUATION(IN);
		  fixed4 c = 0;
		  #ifdef LIGHTMAP_OFF
		  c = LightingLambert (o, _WorldSpaceLightPos0.xyz, atten);
		  #endif // LIGHTMAP_OFF || DIRLIGHTMAP_OFF
		  #ifdef LIGHTMAP_OFF
		  c.rgb += o.Albedo * IN.vlight;
		  #endif // LIGHTMAP_OFF
		  #ifndef LIGHTMAP_OFF
		  #ifndef DIRLIGHTMAP_OFF
		  fixed4 lmtex = UNITY_SAMPLE_TEX2D(unity_Lightmap, IN.lmap.xy);
		  fixed4 lmIndTex = UNITY_SAMPLE_TEX2D_SAMPLER(unity_LightmapInd,unity_Lightmap, IN.lmap.xy);
		  half3 lm = LightingLambert_DirLightmap(o, lmtex, lmIndTex, 0).rgb;
		  #else // !DIRLIGHTMAP_OFF
		  fixed4 lmtex = UNITY_SAMPLE_TEX2D(unity_Lightmap, IN.lmap.xy);
		  fixed3 lm = DecodeLightmap (lmtex);
		  #endif // !DIRLIGHTMAP_OFF
		  #ifdef SHADOWS_SCREEN
		  #if (defined(SHADER_API_GLES) || defined(SHADER_API_GLES3)) && defined(SHADER_API_MOBILE)
		  c.rgb += o.Albedo * min(lm, atten*2);
		  #else
		  c.rgb += o.Albedo * max(min(lm,(atten*2)*lmtex.rgb), lm*atten);
		  #endif
		  #else // SHADOWS_SCREEN
		  c.rgb += o.Albedo * lm;
		  #endif // SHADOWS_SCREEN
		  //c.a = 1.0;
		#endif // LIGHTMAP_OFF
		  c.r = min( Luminance(c), 19.9);	//Prevent encoding errors
		  return fixed4( EncodeFloatRG(c.r * 0.05), 0.0, 1.0);
		  //c.r *= .1;
		  //return fixed4( c.r, c.r, c.r, 1.0);
		}
		
		ENDCG
	}
	Pass {
		Name "FORWARD"
		Tags { "LightMode" = "ForwardAdd" }
		ZWrite Off Blend One One Fog { Color (0,0,0,0) }
		CGPROGRAM
		#pragma vertex vert_surf
		#pragma fragment frag_surf
		#pragma fragmentoption ARB_precision_hint_fastest
		#pragma multi_compile_fwdadd
		#include "HLSLSupport.cginc"
		#include "UnityShaderVariables.cginc"
		#define UNITY_PASS_FORWARDADD
		#include "UnityCG.cginc"
		#include "Lighting.cginc"
		#include "AutoLight.cginc"
		
		#define INTERNAL_DATA
		#define WorldReflectionVector(data,normal) data.worldRefl
		#define WorldNormalVector(data,normal) normal
		
		sampler2D _MainTex;
//		fixed4 _Color;
		
//		struct Input {
//			float2 uv_MainTex;
//		};
//		
		struct v2f_surf {
		  float4 pos : SV_POSITION;
		  float2 pack0 : TEXCOORD0;
		  fixed3 normal : TEXCOORD1;
		  half3 lightDir : TEXCOORD2;
		  LIGHTING_COORDS(3,4)
		};
		float4 _MainTex_ST;
		v2f_surf vert_surf (appdata_full v) {
		  v2f_surf o;
		  o.pos = UnityObjectToClipPos (v.vertex);
		  o.pack0.xy = TRANSFORM_TEX(v.texcoord, _MainTex);
		  o.normal = mul((float3x3)unity_ObjectToWorld, SCALED_NORMAL);
		  float3 lightDir = WorldSpaceLightDir( v.vertex );
		  o.lightDir = lightDir;
		  TRANSFER_VERTEX_TO_FRAGMENT(o);
		  return o;
		}
		fixed4 frag_surf (v2f_surf IN) : COLOR {
//		  Input surfIN;
//		  surfIN.uv_MainTex = IN.pack0.xy;
		  #ifdef UNITY_COMPILER_HLSL
		  SurfaceOutput o = (SurfaceOutput)0;
		  #else
		  SurfaceOutput o;
		  #endif
		  o.Albedo = tex2D(_MainTex, IN.pack0.xy);// * _Color;
		  o.Emission = 0.0;
		  o.Specular = 0.0;
		  o.Alpha = 0.0;
		  o.Gloss = 0.0;
		  o.Normal = IN.normal;
		  #ifndef USING_DIRECTIONAL_LIGHT
		  fixed3 lightDir = normalize(IN.lightDir);
		  #else
		  fixed3 lightDir = IN.lightDir;
		  #endif
		  fixed4 c = LightingLambert (o, lightDir, LIGHT_ATTENUATION(IN));
		  
		  c.r = min(c.r, 19.9);	//Prevent encoding error
		  return fixed4( EncodeFloatRG(c.r * 0.05), 0.0, 1.0);
		  //return fixed4( c.r, c.r, c.r, 1.0);
		}
		
		ENDCG
	}
	Pass {
		Name "PREPASS"
		Tags { "LightMode" = "PrePassBase" }
		Fog {Mode Off}
		CGPROGRAM
		#pragma vertex vert_surf
		#pragma fragment frag_surf
		#pragma fragmentoption ARB_precision_hint_fastest
		
		#include "HLSLSupport.cginc"
		#include "UnityShaderVariables.cginc"
		#define UNITY_PASS_PREPASSBASE
		#include "UnityCG.cginc"
		#include "Lighting.cginc"
		
		#define INTERNAL_DATA
		#define WorldReflectionVector(data,normal) data.worldRefl
		#define WorldNormalVector(data,normal) normal
		
		sampler2D _MainTex;
		fixed4 _Color;
		
//		struct Input {
//			float2 uv_MainTex;
//		};
		
		struct v2f_surf {
		  float4 pos : SV_POSITION;
		  fixed3 normal : TEXCOORD0;
		};
		v2f_surf vert_surf (appdata_full v) {
		  v2f_surf o;
		  o.pos = UnityObjectToClipPos (v.vertex);
		  o.normal = mul((float3x3)unity_ObjectToWorld, SCALED_NORMAL);
		  return o;
		}
		fixed4 frag_surf (v2f_surf IN) : COLOR {
//		  Input surfIN;
		  #ifdef UNITY_COMPILER_HLSL
		  SurfaceOutput o = (SurfaceOutput)0;
		  #else
		  SurfaceOutput o;
		  #endif
		  o.Albedo = 1.0;
		  o.Emission = 0.0;
		  o.Specular = 0.0;
		  o.Alpha = 0.0;
		  o.Gloss = 0.0;
		  o.Normal = IN.normal;
		  
		  fixed4 res;
		  res.rgb = o.Normal * 0.5 + 0.5;
		  res.a = o.Specular;
		  return res;
		}
		
		ENDCG
	}
	Pass {
		Name "PREPASS"
		Tags { "LightMode" = "PrePassFinal" }
		ZWrite Off
		CGPROGRAM
		#pragma vertex vert_surf
		#pragma fragment frag_surf
		#pragma fragmentoption ARB_precision_hint_fastest
		#pragma multi_compile_prepassfinal
		#include "HLSLSupport.cginc"
		#include "UnityShaderVariables.cginc"
		#define UNITY_PASS_PREPASSFINAL
		#include "UnityCG.cginc"
		#include "Lighting.cginc"
		
		#define INTERNAL_DATA
		#define WorldReflectionVector(data,normal) data.worldRefl
		#define WorldNormalVector(data,normal) normal
		
//		struct Input {
//			float2 uv_MainTex;
//		};
		
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
		fixed4 frag_surf (v2f_surf IN) : COLOR {
//		  Input surfIN;
//		  surfIN.uv_MainTex = IN.pack0.xy;
		  #ifdef UNITY_COMPILER_HLSL
		  SurfaceOutput o = (SurfaceOutput)0;
		  #else
		  SurfaceOutput o;
		  #endif
		  o.Albedo = 1.0;
		  o.Emission = 0.0;
		  o.Specular = 0.0;
		  o.Alpha = 0.0;
		  o.Gloss = 0.0;
		  
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
		  fixed4 lmtex = UNITY_SAMPLE_TEX2D(unity_Lightmap, IN.lmap.xy);
		  fixed4 lmIndTex = UNITY_SAMPLE_TEX2D_SAMPLER(unity_LightmapInd,unity_Lightmap, IN.lmap.xy);
		  half4 lm = LightingLambert_DirLightmap(o, lmtex, lmIndTex, 0);
		  light += lm;
		#endif
		#else
		  light.rgb += IN.vlight;
		#endif
		  half4 c = LightingLambert_PrePass (o, light);
		  return c;
		}
		
		ENDCG
	}
	
	}
	Fallback "VertexLit"
}
