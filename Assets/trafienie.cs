using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class trafienie : MonoBehaviour {

	public float czas_oczekiwania   = 3.0f;
	GameObject dym  ;
	GameObject  dym_woman ;
	GameObject dym_alien ;
	GameObject dym_caveman ;
	public GameObject prefab  ;
	public Transform launcher ;

	// Use this for initialization
	void Start () {
		GetComponent< AudioSource > ().Play();
		dym = GameObject.Find("dym");
		dym_woman = GameObject.Find("dym_woman");
		dym_alien = GameObject.Find("dym_alien");
		dym_caveman = GameObject.Find("dym_caveman");
	}
	
	
	void OnCollisionEnter(Collision collision)
	{

		//var exp = GetComponent.<ParticleSystem>();

		if (collision.gameObject.tag == "Player")
		{
			
			
			StartCoroutine(ExampleCoroutine0(collision));
		}
		if (collision.gameObject.tag == "alien")
		{
			StartCoroutine(ExampleCoroutine1(collision));

		}
		if (collision.gameObject.tag == "caveman")
		{

			StartCoroutine(ExampleCoroutine2(collision));
		}
		if (collision.gameObject.tag == "woman")
		{
			StartCoroutine(ExampleCoroutine3(collision));
		}
		//exp.Play();	
		//Explode();
		//Destroy(gameObject, exp.duration);
		if (collision.gameObject.tag != "weapon")
		{
			GetComponent< Renderer > ().enabled = false;
			GetComponent< BoxCollider > ().enabled = false;
			transform.position = launcher.position;
			transform.rotation = launcher.rotation;
			GetComponent< ruch_rakieta > ().zmienna = false;
		}
	}
	private IEnumerator ExampleCoroutine0(Collision collision)
	{
		Instantiate(prefab, transform.position, transform.rotation);
		//exp.Play();
		GetComponent<Renderer>().enabled = false; //zniknij
		GetComponent<Rigidbody>().drag = 100; //zamróź				
		collision.gameObject.GetComponent<Rigidbody>().drag = 1000000;
		gameObject.GetComponent<Collider>().enabled = false;
		gameObject.GetComponent<Rigidbody>().useGravity = false;
		gameObject.GetComponent<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
		dym.GetComponent<ParticleSystem>().Play();
		yield return new WaitForSeconds(czas_oczekiwania);
		dym.GetComponent<ParticleSystem>().Stop();
		collision.gameObject.GetComponent<Rigidbody>().drag = 0;
		//collision.gameObject.GetComponent.<CarUserControl>().enabled = true;
		//	collision.gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;

		//	collision.gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.None;
	}
	private IEnumerator ExampleCoroutine1(Collision collision)
	{
		Instantiate(prefab, transform.position, transform.rotation);
		//exp.Play();
		GetComponent<Renderer>().enabled = false; //zniknij
		GetComponent<Rigidbody>().drag = 100; //zamróź				
		collision.gameObject.GetComponent<Rigidbody>().drag = 1000000;
		gameObject.GetComponent<Collider>().enabled = false;
		gameObject.GetComponent<Rigidbody>().useGravity = false;
		gameObject.GetComponent<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
		dym_alien.GetComponent<ParticleSystem>().Play();
		yield return new WaitForSeconds(czas_oczekiwania);
		dym_alien.GetComponent<ParticleSystem>().Stop();
		collision.gameObject.GetComponent<Rigidbody>().drag = 0;
		//collision.gameObject.GetComponent.<CarAIControl>().driving = true
	}
	private IEnumerator ExampleCoroutine2(Collision collision)
	{
		Instantiate(prefab, transform.position, transform.rotation);
		//exp.Play();
		GetComponent<Renderer>().enabled = false; //zniknij
		GetComponent<Rigidbody>().drag = 100; //zamróź				
		collision.gameObject.GetComponent<Rigidbody>().drag = 1000000;
		gameObject.GetComponent<Collider>().enabled = false;
		gameObject.GetComponent<Rigidbody>().useGravity = false;
		gameObject.GetComponent<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
		dym_caveman.GetComponent<ParticleSystem>().Play();
		yield return new WaitForSeconds(czas_oczekiwania);
		dym_caveman.GetComponent<ParticleSystem>().Stop();
		collision.gameObject.GetComponent<Rigidbody>().drag = 0;
		//collision.gameObject.GetComponent.<CarAIControl>().driving = true
	}
	private IEnumerator ExampleCoroutine3(Collision collision)
	{
		Instantiate(prefab, transform.position, transform.rotation);
		//exp.Play();
		GetComponent<Renderer>().enabled = false; //zniknij
		GetComponent<Rigidbody>().drag = 100; //zamróź				
		collision.gameObject.GetComponent<airace>().enabled = false;
		dym_woman.GetComponent<ParticleSystem>().Play();
		yield return new WaitForSeconds(czas_oczekiwania);
		dym_woman.GetComponent<ParticleSystem>().Stop();
		collision.gameObject.GetComponent<airace>().enabled = true;
	}
}
