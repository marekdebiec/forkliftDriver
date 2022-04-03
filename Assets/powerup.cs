using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class powerup : MonoBehaviour {
	GameObject player  ;
	private GameObject obcy  ;
	private GameObject kobieta  ;
	private GameObject jaskiniowiec  ;

	float liczba  ;
	public GameObject obrazek01 ;
	public GameObject obrazek02;
	public GameObject obrazek03;
	public GameObject obrazek04;
	public GameObject obrazek05;
	public GameObject obrazek06;
	public GameObject shield ;
	// Use this for initialization
	void Start () {
		player = GameObject.FindGameObjectWithTag("Player");
		obcy = GameObject.FindGameObjectWithTag("alien");
		kobieta = GameObject.FindGameObjectWithTag("woman");
		jaskiniowiec = GameObject.FindGameObjectWithTag("caveman");
		liczba = Random.Range(1, 7);
		//obrazek01 = GameObject.Find("powerup_img");
		//obrazek02 = GameObject.Find("powerup_img 1");
		//obrazek03 = GameObject.Find("powerup_img 2");
		//obrazek04 = GameObject.Find("powerup_img 3");
		//obrazek05 = GameObject.Find("powerup_img 4");
		//obrazek06 = GameObject.Find("powerup_img 5");	
	}

	
	void Respawnn()
	{
		StartCoroutine(ExampleCoroutine990());
	}
	private IEnumerator ExampleCoroutine990()
	{
		GetComponent<BoxCollider>().enabled = false;
		GetComponent<Renderer>().enabled = false;
		GetComponent<Rigidbody>().isKinematic = true;
		gameObject.transform.GetChild(0).GetComponent<Renderer>().enabled = false;
		gameObject.transform.GetChild(1).GetComponent<Renderer>().enabled = false;
		gameObject.transform.GetChild(2).GetComponent<Renderer>().enabled = false;
		gameObject.transform.GetChild(3).GetComponent<Renderer>().enabled = false;
		gameObject.transform.GetChild(4).GetComponent<Renderer>().enabled = false;
		yield return new WaitForSeconds(5);
		GetComponent<BoxCollider>().enabled = true;
		GetComponent<Renderer>().enabled = true;
		GetComponent<Rigidbody>().isKinematic = false;
		gameObject.transform.GetChild(0).GetComponent<Renderer>().enabled = true;
		gameObject.transform.GetChild(1).GetComponent<Renderer>().enabled = true;
		gameObject.transform.GetChild(2).GetComponent<Renderer>().enabled = true;
		gameObject.transform.GetChild(3).GetComponent<Renderer>().enabled = true;
		gameObject.transform.GetChild(4).GetComponent<Renderer>().enabled = true;
	}
	void OnCollisionEnter(Collision collision )
	{
		if (collision.gameObject.tag == "Player")
		{
			gameObject.GetComponent< AudioSource > ().Play();
			player.GetComponent< aktywacja > ().powerup = true;
			if (liczba == 1)
			{
				player.GetComponent< aktywacja > ().bariera = true;
				player.GetComponent< aktywacja > ().rakieta = false;
				player.GetComponent< aktywacja > ().kula = false;
				player.GetComponent< aktywacja > ().mina = false;
				player.GetComponent< aktywacja > ().bomba = false;
				player.GetComponent< aktywacja > ().nitro = false;
				obrazek01.SetActive(true);
				obrazek02.SetActive(false);
				obrazek03.SetActive(false);
				obrazek04.SetActive(false);
				obrazek05.SetActive(false);
				obrazek06.SetActive(false);
			}
			if (liczba == 2)
			{
				//ukryj bariere
				player.GetComponent< aktywacja > ().bariera = false;
				shield.SetActive(false);
				player.GetComponent< aktywacja > ().rakieta = true;
				player.GetComponent< aktywacja > ().kula = false;
				player.GetComponent< aktywacja > ().mina = false;
				player.GetComponent< aktywacja > ().bomba = false;
				player.GetComponent< aktywacja > ().nitro = false;
				obrazek01.SetActive(false);
				obrazek02.SetActive(true);
				obrazek03.SetActive(false);
				obrazek04.SetActive(false);
				obrazek05.SetActive(false);
				obrazek06.SetActive(false);
			}
			if (liczba == 3)
			{
				//ukryj bariere
				player.GetComponent< aktywacja > ().bariera = false;
				shield.SetActive(false);
				player.GetComponent< aktywacja > ().rakieta = false;
				player.GetComponent< aktywacja > ().kula = true;
				player.GetComponent< aktywacja > ().mina = false;
				player.GetComponent< aktywacja > ().bomba = false;
				player.GetComponent< aktywacja > ().nitro = false;
				obrazek01.SetActive(false);
				obrazek02.SetActive(false);
				obrazek03.SetActive(true);
				obrazek04.SetActive(false);
				obrazek05.SetActive(false);
				obrazek06.SetActive(false);
			}
			if (liczba == 4)
			{
				//ukryj bariere
				player.GetComponent< aktywacja > ().bariera = false;
				shield.SetActive(false);
				player.GetComponent< aktywacja > ().rakieta = false;
				player.GetComponent< aktywacja > ().kula = false;
				player.GetComponent< aktywacja > ().mina = true;
				player.GetComponent< aktywacja > ().bomba = false;
				player.GetComponent< aktywacja > ().nitro = false;
				obrazek01.SetActive(false);
				obrazek02.SetActive(false);
				obrazek03.SetActive(false);
				obrazek04.SetActive(true);
				obrazek05.SetActive(false);
				obrazek06.SetActive(false);
			}
			if (liczba == 5)
			{
				//ukryj bariere
				player.GetComponent< aktywacja > ().bariera = false;
				shield.SetActive(false);
				player.GetComponent< aktywacja > ().rakieta = false;
				player.GetComponent< aktywacja > ().kula = false;
				player.GetComponent< aktywacja > ().mina = false;
				player.GetComponent< aktywacja > ().bomba = true;
				player.GetComponent< aktywacja > ().nitro = false;
				obrazek01.SetActive(false);
				obrazek02.SetActive(false);
				obrazek03.SetActive(false);
				obrazek04.SetActive(false);
				obrazek05.SetActive(true);
				obrazek06.SetActive(false);
			}
			if (liczba == 6)
			{
				//ukryj bariere
				player.GetComponent< aktywacja > ().bariera = false;
				shield.SetActive(false);
				player.GetComponent< aktywacja > ().rakieta = false;
				player.GetComponent< aktywacja > ().kula = false;
				player.GetComponent< aktywacja > ().mina = false;
				player.GetComponent< aktywacja > ().bomba = false;
				player.GetComponent< aktywacja > ().nitro = true;
				obrazek01.SetActive(false);
				obrazek02.SetActive(false);
				obrazek03.SetActive(false);
				obrazek04.SetActive(false);
				obrazek05.SetActive(false);
				obrazek06.SetActive(true);
			}
			//Instantiate(gameObject, new Vector3(0, 50, -13), transform.rotation);
			//Destroy (gameObject);
			//transform.position = new Vector3(0, 50, -13);
			//transform.position = punkt_zrzutu.transform.position;
			//				if (pozycja == 5) {
			//					//transform.position = punkty[0].transform.position;
			//					//pozycja++;
			//					transform.position = polozenie1;
			//				}
			//				if (pozycja == 1) {
			//					//transform.position = punkty[1].transform.position;
			//					//pozycja++;
			//					transform.position = polozenie2;
			//				}
			//				if (pozycja == 2) {
			//					//transform.position = punkty[2].transform.position;
			//					//pozycja++;
			//					transform.position = polozenie3;
			//				}
			//				if (pozycja == 3) {
			//					//transform.position = punkty[3].transform.position;
			//					//pozycja++;
			//					transform.position = polozenie4;
			//				}
			//				if (pozycja == 4) {
			//					//transform.position = punkty[4].transform.position;
			//					//pozycja++;
			//					transform.position = polozenie5;
			//				}

			liczba = Random.Range(1, 7);

			Respawnn();
			//				pozycja++;			
		}
		if (collision.gameObject.tag == "alien")
		{
			obcy.GetComponent< aktywacja_enemy > ().powerup = true;
			if (liczba == 1)
			{
				obcy.GetComponent< aktywacja_enemy > ().bariera = true;
			}
			if (liczba == 2)
			{
				obcy.GetComponent< aktywacja_enemy > ().rakieta = true;
			}
			if (liczba == 3)
			{
				obcy.GetComponent< aktywacja_enemy > ().kula = true;
			}
			if (liczba == 4)
			{
				obcy.GetComponent< aktywacja_enemy > ().mina = true;
			}
			if (liczba == 5)
			{
				obcy.GetComponent< aktywacja_enemy > ().bomba = true;
			}
			if (liczba == 6)
			{
				obcy.GetComponent< aktywacja_enemy > ().nitro = true;
			}
			//Instantiate(gameObject, new Vector3(0, 50, -13), transform.rotation);
			//Destroy (gameObject);
			//transform.position = new Vector3(0, 50, -13);
			//transform.position = punkt_zrzutu.transform.position;
			//				if (pozycja == 5) {
			//					//transform.position = punkty[0].transform.position;
			//					//transform.position = new Vector3(punkty[0].transform.position.x, transform.position.y, punkty[0].transform.position.z);
			//					transform.position = polozenie1;
			//					//pozycja++;
			//				}
			//				if (pozycja == 1) {
			//					//transform.position = punkty[1].transform.position;
			//					//transform.position = new Vector3(punkty[1].transform.position.x, transform.position.y, punkty[1].transform.position.z);
			//					transform.position = polozenie2;
			//					//pozycja++;
			//				}
			//				if (pozycja == 2) {
			//					//transform.position = punkty[2].transform.position;
			//					//transform.position = new Vector3(punkty[2].transform.position.x, transform.position.y, punkty[2].transform.position.z);
			//					transform.position = polozenie3;
			//					//pozycja++;
			//				}
			//				if (pozycja == 3) {
			//					//transform.position = punkty[3].transform.position;
			//					transform.position = polozenie4;
			//					//transform.position = new Vector3(punkty[3].transform.position.x, transform.position.y, punkty[3].transform.position.z);
			//					//pozycja++;
			//				}
			//				if (pozycja == 4) {
			//					//transform.position = punkty[4].transform.position;
			//					//pozycja++;
			//					transform.position = polozenie5;
			//				}

			liczba = Random.Range(1, 7);
			Respawnn();
			//				pozycja++;
		}
		if (collision.gameObject.tag == "woman")
		{

			kobieta.GetComponent< aktywacja_enemy > ().powerup = true;
			if (liczba == 1)
			{
				kobieta.GetComponent< aktywacja_enemy > ().bariera = true;
			}
			if (liczba == 2)
			{
				kobieta.GetComponent< aktywacja_enemy > ().rakieta = true;
			}
			if (liczba == 3)
			{
				kobieta.GetComponent< aktywacja_enemy > ().kula = true;
			}
			if (liczba == 4)
			{
				kobieta.GetComponent< aktywacja_enemy > ().mina = true;
			}
			if (liczba == 5)
			{
				kobieta.GetComponent< aktywacja_enemy > ().bomba = true;
			}
			if (liczba == 6)
			{
				kobieta.GetComponent< aktywacja_enemy > ().nitro = true;
			}
			//Instantiate(gameObject, new Vector3(0, 50, -13), transform.rotation);
			//Destroy (gameObject);
			//transform.position = new Vector3(0, 50, -13);
			//transform.position = punkt_zrzutu.transform.position;
			//				if (pozycja == 5) {
			//					//transform.position = punkty[0].transform.position;
			//					//transform.position = new Vector3(punkty[0].transform.position.x, transform.position.y, punkty[0].transform.position.z);
			//					transform.position = polozenie1;
			//					//pozycja++;
			//				}
			//				if (pozycja == 1) {
			//					//transform.position = punkty[1].transform.position;
			//					//transform.position = new Vector3(punkty[1].transform.position.x, transform.position.y, punkty[1].transform.position.z);
			//					transform.position = polozenie2;
			//					//pozycja++;
			//				}
			//				if (pozycja == 2) {
			//					//transform.position = punkty[2].transform.position;
			//					//transform.position = new Vector3(punkty[2].transform.position.x, transform.position.y, punkty[2].transform.position.z);
			//					transform.position = polozenie3;
			//					//pozycja++;
			//				}
			//				if (pozycja == 3) {
			//					//transform.position = punkty[3].transform.position;
			//					transform.position = polozenie4;
			//					//transform.position = new Vector3(punkty[3].transform.position.x, transform.position.y, punkty[3].transform.position.z);
			//					//pozycja++;
			//				}
			//				if (pozycja == 4) {
			//					//transform.position = punkty[4].transform.position;
			//					//pozycja++;
			//					transform.position = polozenie5;
			//				}

			liczba = Random.Range(1, 7);
			Respawnn();
			//				pozycja++;

		}
		if (collision.gameObject.tag == "caveman")
		{

			jaskiniowiec.GetComponent< aktywacja_enemy > ().powerup = true;
			if (liczba == 1)
			{
				jaskiniowiec.GetComponent< aktywacja_enemy > ().bariera = true;
			}
			if (liczba == 2)
			{
				jaskiniowiec.GetComponent< aktywacja_enemy > ().rakieta = true;
			}
			if (liczba == 3)
			{
				jaskiniowiec.GetComponent< aktywacja_enemy > ().kula = true;
			}
			if (liczba == 4)
			{
				jaskiniowiec.GetComponent< aktywacja_enemy > ().mina = true;
			}
			if (liczba == 5)
			{
				jaskiniowiec.GetComponent< aktywacja_enemy > ().bomba = true;
			}
			if (liczba == 6)
			{
				jaskiniowiec.GetComponent< aktywacja_enemy > ().nitro = true;
			}
			//Instantiate(gameObject, new Vector3(0, 50, -13), transform.rotation);
			//Destroy (gameObject);
			//transform.position = new Vector3(0, 50, -13);
			//transform.position = punkt_zrzutu.transform.position;
			//				if (pozycja == 5) {
			//					//transform.position = punkty[0].transform.position;
			//					//transform.position = new Vector3(punkty[0].transform.position.x, transform.position.y, punkty[0].transform.position.z);
			//					transform.position = polozenie1;
			//					//pozycja++;
			//				}
			//				if (pozycja == 1) {
			//					//transform.position = punkty[1].transform.position;
			//					//transform.position = new Vector3(punkty[1].transform.position.x, transform.position.y, punkty[1].transform.position.z);
			//					transform.position = polozenie2;
			//					//pozycja++;
			//				}
			//				if (pozycja == 2) {
			//					//transform.position = punkty[2].transform.position;
			//					//transform.position = new Vector3(punkty[2].transform.position.x, transform.position.y, punkty[2].transform.position.z);
			//					transform.position = polozenie3;
			//					//pozycja++;
			//				}
			//				if (pozycja == 3) {
			//					//transform.position = punkty[3].transform.position;
			//					transform.position = polozenie4;
			//					//transform.position = new Vector3(punkty[3].transform.position.x, transform.position.y, punkty[3].transform.position.z);
			//					//pozycja++;
			//				}
			//				if (pozycja == 4) {
			//					//transform.position = punkty[4].transform.position;
			//					//pozycja++;
			//					transform.position = polozenie5;
			//				}

			liczba = Random.Range(1, 7);
			Respawnn();
			//				pozycja++;

		}
	}
}
