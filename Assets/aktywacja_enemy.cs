using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class aktywacja_enemy : MonoBehaviour {
	//	public var shield : GameObject;
	//var ogon : Transform;
	//public var mine: GameObject;
	//public var rocket : GameObject;

	//public var bomb : GameObject;
	//var nitro2 : GameObject;
	//var wozek : GameObject;
	//public var mine_big: GameObject;
	//var ogon2 : Transform;
	//var powerup : boolean;
	//var bariera : boolean;
	//var rakieta : boolean;
	//var kula : boolean;
	//var mina : boolean;
	//var bomba : boolean;
	//var nitro : boolean;
	//var czasDzialania : float = 2.5f;
	//var predkosc : float = 0.5;
	//private var jestNitro : boolean;
	//var speed : float = 10;
	//var rakieta1 : GameObject;
	//var rakieta2 : GameObject;
	//var rakieta3 : GameObject;
	public GameObject shield;
	public Transform ogon;
	public GameObject mine;
	public GameObject rocket;
	public GameObject bomb;
	public GameObject nitro2;
	public GameObject wozek;
	public GameObject mine_big;
	public Transform ogon2;
	public bool powerup;
	public bool bariera;
	public bool rakieta;
	public bool kula;
	public bool mina;
	public bool bomba;
	public bool nitro;
	public float czasDzialania = 2.5f;
	public float predkosc = 0.5f;
	private bool jestNitro;
	public float speed = 10.0f;
	public GameObject rakieta1;
	public GameObject rakieta2;
	public GameObject rakieta3;

		
	// Update is called once per frame
	void Update () {
		if (powerup)
		{
			if (bariera)
				StartCoroutine(ExampleCoroutine27());
			if (rakieta)
				RakietaEnemy();
			if (kula)
				KulaEnemy();
			if (mina)
				MinaEnemy();
			if (bomba)
				BombaEnemy();
			if (nitro)
				StartCoroutine(ExampleCoroutine28());
		}
		if (jestNitro)
		{
			transform.Translate(Vector3.forward * Time.deltaTime * speed);
		}
	}
	private IEnumerator ExampleCoroutine27()
	{
		shield.SetActive(true);
		yield return new WaitForSeconds(10);
		powerup = false;
		bariera = false;
	}
	void RakietaEnemy ()
    {
		//Instantiate(rocket, celownik.transform.position, transform.rotation);
		rakieta1.GetComponent< ruch_rakieta > ().zmienna = true;
		rakieta2.GetComponent< ruch_rakieta > ().zmienna = true;
		rakieta3.GetComponent< ruch_rakieta > ().zmienna = true;
		powerup = false;
		rakieta = false;
	}
	void KulaEnemy ()
    {
		Instantiate(mine_big, ogon2.transform.position, ogon2.transform.rotation);
		powerup = false;
		kula = false;
	}
	void MinaEnemy()
    {
		Instantiate(mine, ogon.transform.position, ogon.transform.rotation);
		powerup = false;
		mina = false;
	}
	void BombaEnemy ()
    {
		Instantiate(bomb, ogon.transform.position, ogon.transform.rotation);
		powerup = false;
		bomba = false;
	}
	private IEnumerator ExampleCoroutine28()
	{
		if (wozek.GetComponent< Rigidbody > ().velocity.magnitude > predkosc)
		{
			nitro2.SetActive(true);
			jestNitro = true;
			yield return new WaitForSeconds(czasDzialania);
			jestNitro = false;
			powerup = false;
			nitro = false;
			nitro2.SetActive(false);
		}
	}
}
