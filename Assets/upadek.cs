using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class upadek : MonoBehaviour {

	private float lastY; // last grounded height 
	public bool falling = false; // tells when the player is falling
	//var character: CharacterController;
	public bool isGrounded ;
	public GameObject prefab ;
	GameObject audiolistener  ;
	GameObject muza  ;
	GameObject Strefa1   ;
	GameObject Strefa2 ;
	GameObject Strefa3 ;

		void Awake()
	{
		audiolistener = GameObject.Find("audio_listener");
		muza = GameObject.Find("maszt");
		Strefa1 = GameObject.Find("Strefa1");
		Strefa2 = GameObject.Find("Strefa2");
		Strefa3 = GameObject.Find("Strefa3");
	}
	// Use this for initialization
	void Start () {
		//character = GetComponent(CharacterController);
		lastY = transform.position.y;
	}
	
	// Update is called once per frame
	void Update () {
		//if (character.isGrounded == false){ // if character not grounded... 
		if (!isGrounded)
		{
			falling = true; // assume it's falling 
		}
		else
		{ // if character grounded...
			if (falling)
			{ // but was falling last update... 
				var hFall = lastY - transform.position.y; // calculate the fall height... 

				if (hFall > 2)
				{ // then check the damage/death
					muza.GetComponent< AudioSource > ().Play();
					Instantiate(prefab, transform.position, Quaternion.identity);
					Destroy(gameObject); // player is dead					  	
					Strefa1.GetComponent<tworz2>().Tworzenie();
					Strefa2.GetComponent<tworz2>().Tworzenie();
					Strefa3.GetComponent<tworz2>().Tworzenie();
					audiolistener.GetComponent<Timer2>().timer = 0; //zresetuj czasomierz
					audiolistener.GetComponent<Timer2>().enabled = false; //wylacz odliczanie czasu
				}
			}
			lastY = transform.position.y; // update lastY when character grounded 
		}
	}
	void OnCollisionStay(Collision other)
	{
		isGrounded = true;
	}
	void OnCollisionExit(Collision other)
	{
		isGrounded = false;
	}
}
