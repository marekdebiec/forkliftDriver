using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class tarcza : MonoBehaviour {

	// Use this for initialization
	void Start () {
		AudioSource audio   = GetComponent< AudioSource > ();
	}
	
	// Update is called once per frame
	void Update () {
		
		StartCoroutine(ExampleCoroutine8888());
	}
	private IEnumerator ExampleCoroutine8888()
	{
		yield return new WaitForSeconds(10);
		gameObject.SetActive(false);
	}
	void OnTriggerEnter(Collider other )
	{
		if (other.tag == "weapon")
		{
			Destroy(other.gameObject);
		}
	}
}
