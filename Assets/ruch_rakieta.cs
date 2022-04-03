using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ruch_rakieta : MonoBehaviour {
	//var damping = 1.0;
	//var drivespeed = 15;
	//var target :  Transform;
	//var zmienna : boolean;
	//var speed = 5;
	//var czas = 0.0f;
	public float damping = 1.0f;
	public float drivespeed = 15.0f;
	public Transform target;
	public bool zmienna;
	public float speed = 5.0f;
	public float czas = 0.0f;

	// Use this for initialization
	void Start () {
		//GetComponent.< Renderer > ().enabled = false;
		//GetComponent.< BoxCollider > ().enabled = false;
		GetComponent< Renderer > ().enabled = false;
		GetComponent< BoxCollider > ().enabled = false;
	}
	
	// Update is called once per frame
	void Update () {
		if (zmienna)
		{
			//Ruch();
			StartCoroutine(ExampleCoroutine333());
		}
	}

	//void Ruch()
	//	{
	//	}
	private IEnumerator ExampleCoroutine333()
{
		//yield WaitForSeconds(czas);
		//GetComponent.< Renderer > ().enabled = true;
		//GetComponent.< BoxCollider > ().enabled = true;
		//transform.Translate(Vector3.forward * Time.deltaTime * speed);
		//yield WaitForSeconds(3);
		//transform.Translate(Vector3.forward * Time.deltaTime * drivespeed);
		//var rotation = Quaternion.LookRotation(target.position - transform.position);
		//// var rotation = Quaternion.LookRotation(FindClosestEnemy().transform.position - transform.position);
		//transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
		yield return new WaitForSeconds(czas);
		GetComponent< Renderer > ().enabled = true;
		GetComponent< BoxCollider > ().enabled = true;
		transform.Translate(Vector3.forward * Time.deltaTime * speed);
		yield return new WaitForSeconds(3);
		transform.Translate(Vector3.forward * Time.deltaTime * drivespeed);
		var rotation = Quaternion.LookRotation(target.position - transform.position);
		// var rotation = Quaternion.LookRotation(FindClosestEnemy().transform.position - transform.position);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
	}
}
