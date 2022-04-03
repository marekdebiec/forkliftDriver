//You can use this script to customize what happens at the end of your race
//This is in UnityScript (or javascript), for a C# version look for GeneralEndOfRaceCS.cs (it should be in the same folder)

#pragma strict

var lapScript : lap_script; //remeber to drag your LapSystem object here
var delayUntilGUIFadesIn = 0.0;
private var delayover = false;
private var hasFinished = false;
private var hasFadedGUIIn = false;
private var positionFinished : int;

//GUI to fade in:
var background : TextureScript;
var first : TextureScript;
var second : TextureScript;
var third : TextureScript;
var fourth : TextureScript;
var playAgainButton : PlayAgainButton;

var gracz : GameObject;
var alien : GameObject;
var woman : GameObject;
var caveman : GameObject;
private var audio_listener : GameObject;

function Start () {
	gracz = GameObject.Find("wozek01");
	alien = GameObject.Find("still");
	woman = GameObject.Find("wozek02");
	caveman = GameObject.Find("wozek05");
	audio_listener = GameObject.Find("audio_listener");
}
function Update () {
	
	hasFinished = lapScript.hasfinished;
	
	positionFinished = lapScript.positionfinished;

	if (delayover == true) {
		if (hasFadedGUIIn == false) {
			//fade GUI in
			background.FadeIn();
			playAgainButton.FadeIn();
			if (positionFinished == 2) {
				//came 1st
				first.FadeIn();
			}
			if (positionFinished == 3) {
				//came 2nd
				second.FadeIn();
			}
			if (positionFinished == 4) {
				//came 3rd
				third.FadeIn();
			}
			if (positionFinished == 5) {
				//came 4th
				fourth.FadeIn();
			}
			// ... etc
			
		hasFadedGUIIn = true;
		}
	}
	if (hasFinished == true) {
		DelayUntilFadeIn();
		//zamroz
		//gracz.transform.parent.GetComponent.<Rigidbody>().drag = 1000000;
		
		gracz.GetComponent.<Rigidbody>().drag++;
		gracz.GetComponent.<AudioSource>().enabled = false;
		alien.GetComponent.<Rigidbody>().drag++;
		woman.GetComponent.<Rigidbody>().drag++;
		caveman.GetComponent.<Rigidbody>().drag++;
		
		audio_listener.GetComponent.<time_racing>().zmienna = false; //wylacz dzialanie czasomierza
	}
	
}

function DelayUntilFadeIn () {
	yield WaitForSeconds(delayUntilGUIFadesIn);
	delayover = true;
}

public function ButtonPressed () {
	Application.LoadLevel(Application.loadedLevel);
}