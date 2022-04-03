using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class start : MonoBehaviour {
	public float delay   = 5.0f;				//opoznienie startu
	// Use this for initialization
	void Start () {
		
		StartCoroutine(ExampleCoroutine3568());
	}
	private IEnumerator ExampleCoroutine3568()
	{
		// Waits 5 seconds
		yield return new WaitForSeconds(delay);
		gameObject.GetComponent< airace > ().enabled = true;
	}

	
}
