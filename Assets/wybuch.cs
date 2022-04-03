using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class wybuch : MonoBehaviour {
	public float czas_oczekiwania  = 5.0f;
	//var canvas : GameObject;
	//var obrazek01 : GameObject;
	//var obrazek02 : GameObject;
	//var obrazek03 : GameObject;
	//var obrazek04 : GameObject;
	//var obrazek05 : GameObject;
	//var obrazek06 : GameObject;
	GameObject dym  ;
	GameObject dym_woman;
	GameObject dym_alien ;
	GameObject dym_caveman ;

	// Use this for initialization
	void Start () {
		Explode();
		//obrazek04 = GameObject.Find("powerup_img 3");
		//		canvas = GameObject.Find("Canvas");
		//		obrazek01 = canvas.transform.GetChild(13).gameObject;
		//        obrazek02 = canvas.transform.GetChild(12).gameObject;
		//        obrazek03 = canvas.transform.GetChild(11).gameObject;
		//        obrazek04 = canvas.transform.GetChild(10).gameObject;
		//        obrazek05 = canvas.transform.GetChild(9).gameObject;
		//        obrazek06 = canvas.transform.GetChild(8).gameObject;

		//        obrazek01.SetActive (false);
		//		obrazek02.SetActive (false);
		//		obrazek03.SetActive (false);
		//		obrazek04.SetActive (false);
		//		obrazek05.SetActive (false);
		//		obrazek06.SetActive (false);
		dym = GameObject.Find("dym");
		dym_woman = GameObject.Find("dym_woman");
		dym_alien = GameObject.Find("dym_alien");
		dym_caveman = GameObject.Find("dym_caveman");
	}
	
	 
	public void OnTriggerEnter(Collider other  )
	{
		if (other.GetComponent< Collider > ().gameObject.tag == "Player")
		{ //uwaga!!!						 
			StartCoroutine(ExampleCoroutine666(other));			
		}
		if (other.GetComponent< Collider > ().gameObject.tag == "alien")
		{
			StartCoroutine(ExampleCoroutine662(other));			
		}
		if (other.GetComponent< Collider > ().gameObject.tag == "woman")
		{
			StartCoroutine(ExampleCoroutine661(other));		
		}
		if (other.GetComponent< Collider > ().gameObject.tag == "caveman")
		{
			StartCoroutine(ExampleCoroutine6611(other));
		}
	}
	private IEnumerator ExampleCoroutine666(Collider other)
    {
		other.transform.parent.GetComponent<Rigidbody>().drag = 1000000;
		dym.GetComponent<ParticleSystem>().Play();
		yield return new WaitForSeconds(czas_oczekiwania);
		dym.GetComponent<ParticleSystem>().Stop();
		other.transform.parent.GetComponent<Rigidbody>().drag = 0;
	}
	private IEnumerator ExampleCoroutine662(Collider other)
    {
		other.GetComponent<Rigidbody>().drag = 1000000;
		dym_alien.GetComponent<ParticleSystem>().Play();
		yield return new WaitForSeconds(czas_oczekiwania);
		dym_alien.GetComponent<ParticleSystem>().Stop();
		other.GetComponent<Rigidbody>().drag = 0;
	}
	private IEnumerator ExampleCoroutine661(Collider other)
    {
		other.GetComponent<Rigidbody>().drag = 1000000;
		dym_woman.GetComponent<ParticleSystem>().Play();
		yield return new WaitForSeconds(czas_oczekiwania);
		dym_woman.GetComponent<ParticleSystem>().Stop();
		other.GetComponent<Rigidbody>().drag = 0;
	}
	private IEnumerator ExampleCoroutine6611(Collider other)
    {
		other.GetComponent<Rigidbody>().drag = 1000000;
		dym_caveman.GetComponent<ParticleSystem>().Play();
		yield return new WaitForSeconds(czas_oczekiwania);
		dym_caveman.GetComponent<ParticleSystem>().Stop();
		other.GetComponent<Rigidbody>().drag = 0;
	}
	void Explode()
	{
		StartCoroutine(ExampleCoroutine66111());
	}
	private IEnumerator ExampleCoroutine66111()
    {
		var exp = GetComponent<ParticleSystem>();
		AudioSource audio = GetComponent<AudioSource>();

		exp.Play();
		yield return new WaitForSeconds(0);
		GetComponent<AudioSource>().enabled = true;
		// audio.Play();
		yield return new WaitForSeconds(5);
		// audio.Play(264600); //Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
		audio.Play();
		exp.Stop();
		gameObject.transform.GetChild(0).GetChild(0).GetComponent<ParticleSystem>().Stop();
		gameObject.GetComponent<Renderer>().enabled = false;
		gameObject.transform.GetChild(0).GetComponent<Renderer>().enabled = false;

		Destroy(gameObject, 6 + 1);
	}
}
