// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'


Shader "Hidden/FXAA3" {
Properties {
	_MainTex ("Base (RGB)", 2D) = "white" {}
}
SubShader {
	Pass {		
		ZTest Always Cull Off ZWrite Off
		Fog { Mode off }

		CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#pragma fragmentoption ARB_precision_hint_fastest 
			#pragma glsl
			#pragma target 3.0

			#include "UnityCG.cginc"

			#define FXAA_PC
			#define FXAA_HLSL_3
			#define FXAA_EARLY_EXIT 0
			#include "Fxaa3_11.cginc"

			uniform sampler2D _MainTex;
			uniform float4 _MainTex_TexelSize;
			uniform float4 _rcpFrame;
			uniform float4 _rcpFrameOpt;

			struct v2f {
				float4 pos : POSITION;
				float2 uv : TEXCOORD0;
				float4 uvAux : TEXCOORD1;
			};

			v2f vert( appdata_img v )
			{
				v2f o;
				o.pos = UnityObjectToClipPos (v.vertex);

				float2 uv = v.texcoord.xy;
				o.uv = uv;				

				o.uvAux.xy = uv + float2( -_MainTex_TexelSize.x, +_MainTex_TexelSize.y ) * 0.5f;
				o.uvAux.zw = uv + float2( +_MainTex_TexelSize.x, -_MainTex_TexelSize.y ) * 0.5f;

				#if SHADER_API_D3D9
				if (_MainTex_TexelSize.y < 0)
					uv.y = 1-uv.y;
				#endif				

				return o;
			}

			half4 frag (v2f i) : COLOR
			{				
				return FxaaPixelShader( 
					i.uv, 
					_MainTex, 
					_MainTex_TexelSize.xy, 
					0.75f,
					0.166f,
					0.0833f );
			}
		ENDCG
	}
}

Fallback off

}