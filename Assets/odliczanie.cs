using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class odliczanie : MonoBehaviour {
	public GameObject obrazek1 ;
	public GameObject obrazek2 ;
	public GameObject obrazek3 ;
	public GameObject obrazek4  ;
	// Use this for initialization
	void Start () {
		StartCoroutine(ExampleCoroutine3563());
	}
	
	
	private IEnumerator ExampleCoroutine3563()
	{
		// Waits 1 sec
		yield return new WaitForSeconds(1);
		obrazek1.SetActive(false);
		obrazek2.SetActive(true);
		// Waits 1 sec
		yield return new WaitForSeconds(1);
		obrazek2.SetActive(false);
		obrazek3.SetActive(true);
		// Waits 1 sec
		yield return new WaitForSeconds(1);
		obrazek3.SetActive(false);
		yield return new WaitForSeconds(2);
		obrazek4.SetActive(true);
		yield return new WaitForSeconds(1);
		obrazek4.SetActive(false);
		//yield WaitForSeconds (2);

	}
}
