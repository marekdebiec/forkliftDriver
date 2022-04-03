using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TextureScript : MonoBehaviour {
	//	var isVisibleAtStart = false;
	//	var fadeInAtStart = false;
	//	var fadeInDelay = 0.0;
	//	var fadeInSpeed = 0.1;
	//	var textureRect : Rect;
	//var texture : Texture2D;
	//var depth = 0;

	//	private var isVisible = true;
	//	public var alpha = 0.0; //an alpha of 1 means the texture is opaque, 0 means completely see-through. This variable changes to fade in and out.
	//	private var isFadingIn = false;
	//	private var guiColor : Color; //includes gui alpha variable
	//private var isFadingOut = false;
	public bool isVisibleAtStart = false;
	public bool fadeInAtStart = false;
	public float fadeInDelay = 0.0f;
	public float fadeInSpeed = 0.1f;
	public Rect textureRect;
	public Texture2D texture;
	public float depth = 0.0f;
	private bool isVisible = true;
	public float alpha = 0.0f; //an alpha of 1 means the texture is opaque, 0 means completely see-through. This variable changes to fade in and out.
	private bool isFadingIn = false;
	private Color guiColor; //includes gui alpha variable
	private bool isFadingOut = false;

	void Awake ()
    {
		guiColor = Color.white;

		if (isVisibleAtStart == false)
		{
			isVisible = false;
		}
	}
	// Use this for initialization
	void Start () {
		if (fadeInAtStart == true)
		{
			StartCoroutine(ExampleCoroutine29());
			
		}
	}
	private IEnumerator ExampleCoroutine29()
    {
		yield return new WaitForSeconds(fadeInDelay);
		FadeIn();
	}
	// Update is called once per frame
	void Update () {
		if (isFadingIn == true)
		{
			alpha = alpha + fadeInSpeed;
			if (alpha > 1)
			{
				//finished fading in
				alpha = 1;
				isFadingIn = false;
			}
		}

		if (isFadingOut == true)
		{
			alpha = alpha - fadeInSpeed;
			if (alpha < 0)
			{
				//finished fading out
				alpha = 0;
				isFadingOut = false;
			}
		}
	}
	void OnGUI()
	{

		GUI.depth = (int) depth;
		guiColor.a = alpha;
		GUI.color = guiColor;

		if (isVisible == true)
		{
			GUI.DrawTexture(textureRect, texture, ScaleMode.StretchToFill, true, 10.0f);

		}

	}
	public void FadeIn ()
    {
		alpha = 0;
		isFadingIn = true;
	}
	public void FadeOut()
	{

		alpha = 1;
		isFadingOut = true;

	}
}
