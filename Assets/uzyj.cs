using UnityEngine;
using System.Collections;

public class uzyj : MonoBehaviour {

	public GameObject mine;
	public GameObject mine_big;
	public GameObject bomb;
	public GameObject shield;
	public GameObject rocket;

	public bool powerup;

	public bool bariera;
	public bool rakieta;
	public bool kula;
	public bool mina;
	public bool bomba;
	public bool nitro;

	public Transform ogon;
	public Transform ogon2;
	public Transform celownik;

	public GameObject canvas;
	public GameObject obrazek01;
	public GameObject obrazek02;
	public GameObject obrazek03;
	public GameObject obrazek04;
	public GameObject obrazek05;
	public GameObject obrazek06;

	public GameObject nitro2;
	public GameObject wozek;
	public Camera kamera1;
	public Camera kamera2;
	public Camera kamera3;
	public float predkosc = 0.5f;

	public void Start () {
		canvas = GameObject.Find("Canvas");	  	
		obrazek01 = canvas.transform.GetChild(13).gameObject;
		obrazek02 = canvas.transform.GetChild(12).gameObject;
		obrazek03 = canvas.transform.GetChild(11).gameObject;
		obrazek04 = canvas.transform.GetChild(10).gameObject;
		obrazek05 = canvas.transform.GetChild(9).gameObject;
		obrazek06 = canvas.transform.GetChild(8).gameObject;
	}

	public void Mina()
	{
		Instantiate(mine, ogon.transform.position, ogon.transform.rotation);
		powerup = false;
		mina = false;
	}
	public void Bariera ()
	{
		shield.SetActive(true);
		shield.GetComponent<AudioSource>().Play();		
		obrazek01.SetActive (false);
		obrazek02.SetActive (false);
		obrazek03.SetActive (false);
		obrazek04.SetActive (false);
		obrazek05.SetActive (false);
		obrazek06.SetActive (false);		
		StartCoroutine(Example());	
	}
	IEnumerator Example() {
		yield return new WaitForSeconds(10);
		powerup = false;
		bariera = false;
	}
	public void Rakieta ()
	{
		Instantiate(rocket, celownik.transform.position, transform.rotation);
		powerup = false;
		rakieta = false;
	}
	public void Bomba ()
	{
		Instantiate(bomb, ogon.transform.position, ogon.transform.rotation);
		powerup = false;
		bomba = false;
	}
	public void Kula ()
	{
		Instantiate(mine_big, ogon2.transform.position, ogon2.transform.rotation);
		powerup = false;
		kula = false;
		obrazek01.SetActive (false);
		obrazek02.SetActive (false);
		obrazek03.SetActive (false);
		obrazek04.SetActive (false);
		obrazek05.SetActive (false);
		obrazek06.SetActive (false);
	}
	public void Nitro ()
	{
		MotionBlur otherScript2 = kamera1.GetComponent<MotionBlur>(); 
		MotionBlur otherScript3 = kamera2.GetComponent<MotionBlur>(); 
		MotionBlur otherScript4 = kamera3.GetComponent<MotionBlur>(); 
		
		if (wozek.GetComponent<Rigidbody>().velocity.magnitude > predkosc) {			
			nitro2.SetActive (true);			
			otherScript2.enabled = true;
			otherScript3.enabled = true;
			otherScript4.enabled = true;
			
			obrazek01.SetActive (false);
			obrazek02.SetActive (false);
			obrazek03.SetActive (false);
			obrazek04.SetActive (false);
			obrazek05.SetActive (false);
			obrazek06.SetActive (false);
			StartCoroutine(Example2());	

		
		}
	}
	IEnumerator Example2() {
		MotionBlur otherScript2 = kamera1.GetComponent<MotionBlur>(); 
		MotionBlur otherScript3 = kamera2.GetComponent<MotionBlur>(); 
		MotionBlur otherScript4 = kamera3.GetComponent<MotionBlur>(); 
		yield return new WaitForSeconds(5);
		powerup = false;
		nitro = false;
		nitro2.SetActive (false);			
		otherScript2.enabled = false;
		otherScript3.enabled = false;
		otherScript4.enabled = false;
	}
}
