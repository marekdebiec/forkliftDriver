using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//You can use this script to customize what happens at the end of your race
//This is in UnityScript (or javascript), for a C# version look for GeneralEndOfRaceCS.cs (it should be in the same folder)

public class EndOfDemoRace : MonoBehaviour {

	public lap_script lapScript; //remeber to drag your LapSystem object here
	public float delayUntilGUIFadesIn = 0.0f;
	private bool delayover = false;
	private bool hasFinished = false;
	private bool hasFadedGUIIn = false;
	private float positionFinished  ;

	//GUI to fade in:
	public  TextureScript background;
	public  TextureScript first;
	public  TextureScript second;
	public  TextureScript third;
	public  TextureScript fourth;
	public  PlayAgainButton playAgainButton;

	public  GameObject gracz;
	public  GameObject alien;
	public  GameObject woman;
	public  GameObject caveman;
	GameObject audio_listener;

	// Use this for initialization
	void Start () {
		gracz = GameObject.Find("wozek01");
		alien = GameObject.Find("still");
		woman = GameObject.Find("wozek02");
		caveman = GameObject.Find("wozek05");
		audio_listener = GameObject.Find("audio_listener");
	}
	
	// Update is called once per frame
	void Update () {
		hasFinished = lapScript.hasfinished;

		positionFinished = lapScript.positionfinished;

		if (delayover == true)
		{
			if (hasFadedGUIIn == false)
			{
				//fade GUI in
				background.FadeIn();
				playAgainButton.FadeIn();
				if (positionFinished == 2)
				{
					//came 1st
					first.FadeIn();
				}
				if (positionFinished == 3)
				{
					//came 2nd
					second.FadeIn();
				}
				if (positionFinished == 4)
				{
					//came 3rd
					third.FadeIn();
				}
				if (positionFinished == 5)
				{
					//came 4th
					fourth.FadeIn();
				}
				// ... etc

				hasFadedGUIIn = true;
			}
		}
		if (hasFinished == true)
		{
			DelayUntilFadeIn();
			//zamroz
			//gracz.transform.parent.GetComponent.<Rigidbody>().drag = 1000000;

			gracz.GetComponent< Rigidbody > ().drag++;
			gracz.GetComponent< AudioSource > ().enabled = false;
			alien.GetComponent< Rigidbody > ().drag++;
			woman.GetComponent< Rigidbody > ().drag++;
			caveman.GetComponent< Rigidbody > ().drag++;

			audio_listener.GetComponent< time_racing > ().zmienna = false; //wylacz dzialanie czasomierza
		}
	}
	public void  DelayUntilFadeIn()
	{
		StartCoroutine(ExampleCoroutine888());
	}
	private IEnumerator ExampleCoroutine888()
	{
		yield return new WaitForSeconds(delayUntilGUIFadesIn);
		delayover = true;
	}
	public void ButtonPressed()
    {
		Application.LoadLevel(Application.loadedLevel);

	}
}
