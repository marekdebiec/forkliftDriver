#pragma strict

var isVisibleAtStart = false;
var fadeInAtStart = false;
var fadeInDelay = 0.0;
var fadeInSpeed = 0.1;
var textureRect : Rect;
var texture : Texture2D;
var textureOver : Texture2D;
var canPressWhenFading = false;
var GUIControlScript : EndOfDemoRace;
var depth = 0;

private var isVisible = true;
private var alpha = 0.0; //an alpha of 1 means the texture is opaque, 0 means completely see-through. This variable changes to fade in and out.
private var isFadingIn = false;
private var guiColor : Color; //includes gui alpha variable
private var isFadingOut = false;
private var canBePressed = false;

function Awake () {
	
	guiColor = Color.white;
	
	if (isVisibleAtStart == false) {
		isVisible = false;
	}
}

function Start () {

	if (fadeInAtStart == true) {
		yield WaitForSeconds(fadeInDelay);
		FadeIn();
	}
	

}

function Update () {
	
	if (isFadingIn == true) {
		canBePressed = false;
		alpha = alpha + fadeInSpeed;
		if (alpha > 1) {
			//finished fading in
			alpha = 1;
			isFadingIn = false;
		}
	}
	
	if (isFadingOut == true) {
		canBePressed = false;
		alpha = alpha - fadeInSpeed;
		if (alpha < 0) {
			//finished fading out
			alpha = 0;
			isFadingOut = false;
		}
	}
	
	if ((isFadingOut == false)&&(isFadingIn == false)&&(alpha > 0.8)) {
		canBePressed = true;
	}

}

function OnGUI() {
	
	GUI.depth = depth;
	guiColor.a = alpha;
	GUI.color = guiColor;

	if (isVisible == true) {
		var invertedRect = Rect(textureRect.x,((Screen.height-textureRect.y)-textureRect.height),textureRect.width,textureRect.height);
		if ((invertedRect.Contains(Input.mousePosition))&&(canBePressed == true)) {
			//GUI.DrawTexture(textureRect, textureOver, ScaleMode.StretchToFill, true, 10.0f);
			GUI.DrawTexture(new Rect(Screen.width / 2 - 250, 200, 501, 112), textureOver, ScaleMode.StretchToFill, true, 10.0f); //to ja
			if(Input.GetMouseButtonDown(0)){
				GUIControlScript.ButtonPressed();
			}
		} else {
			//GUI.DrawTexture(textureRect, texture, ScaleMode.StretchToFill, true, 10.0f);
			GUI.DrawTexture(new Rect(Screen.width / 2 - 250,  200,501, 112), texture, ScaleMode.StretchToFill, true, 10.0f); //to ja
		}
	}
	
}

public function FadeIn () {

	alpha = 0;
	isFadingIn = true;
	
}

public function FadeOut () {

	alpha = 1;
	isFadingOut = true;
	
}