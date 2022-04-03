using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayAgainButton : MonoBehaviour {
	public bool isVisibleAtStart = false;
	public bool fadeInAtStart = false;
	public float fadeInDelay = 0.0f;
	public float fadeInSpeed = 0.1f;
	public Rect textureRect ;
	public Texture2D texture;
	public Texture2D textureOver;
	public bool canPressWhenFading = false;
	public EndOfDemoRace GUIControlScript;
	public float depth = 0.0f;

	private bool isVisible = true;
	private float alpha = 0.0f; //an alpha of 1 means the texture is opaque, 0 means completely see-through. This variable changes to fade in and out.
	private bool isFadingIn = false;
	private  Color guiColor ; //includes gui alpha variable
	private bool isFadingOut = false;
	private bool canBePressed = false;

	void Awake()
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
			StartCoroutine(ExampleCoroutine356());
		}
	}
	private IEnumerator ExampleCoroutine356()
    {
		yield return new WaitForSeconds(fadeInDelay);
		FadeIn();
	}
	// Update is called once per frame
	void Update () {
		if (isFadingIn == true)
		{
			canBePressed = false;
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
			canBePressed = false;
			alpha = alpha - fadeInSpeed;
			if (alpha < 0)
			{
				//finished fading out
				alpha = 0;
				isFadingOut = false;
			}
		}

		if ((isFadingOut == false) && (isFadingIn == false) && (alpha > 0.8))
		{
			canBePressed = true;
		}
	}
	void OnGUI()
	{

		GUI.depth = (int)depth;
		guiColor.a = alpha;
		GUI.color = guiColor;

		if (isVisible == true)
		{
		     var invertedRect = new Rect(textureRect.x, ((Screen.height - textureRect.y) - textureRect.height), textureRect.width, textureRect.height); 
			if ((invertedRect.Contains(Input.mousePosition)) && (canBePressed == true))
			{
				//GUI.DrawTexture(textureRect, textureOver, ScaleMode.StretchToFill, true, 10.0f);
				GUI.DrawTexture(new Rect(Screen.width / 2 - 250, 200, 501, 112), textureOver, ScaleMode.StretchToFill, true, 10.0f); //to ja
				if (Input.GetMouseButtonDown(0))
				{
					GUIControlScript.ButtonPressed();
				}
			}
			else
			{
				//GUI.DrawTexture(textureRect, texture, ScaleMode.StretchToFill, true, 10.0f);
				GUI.DrawTexture(new Rect(Screen.width / 2 - 250, 200, 501, 112), texture, ScaleMode.StretchToFill, true, 10.0f); //to ja
			}
		}

	}
	public void FadeIn ( )
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
