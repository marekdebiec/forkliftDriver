using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class swiatla : MonoBehaviour {
	public GameObject zielone ;
	public GameObject czerwone ;
	public GameObject pomaranczowe  ;

	// Use this for initialization
	void Start () {
		zielone.SetActive(false);
		pomaranczowe.SetActive(false);
		
		StartCoroutine(ExampleCoroutine35690());
	}

	
	private IEnumerator ExampleCoroutine35690()
	{
		yield return new WaitForSeconds(2.5f);
		pomaranczowe.SetActive(true);
		czerwone.SetActive(false);
		yield return new WaitForSeconds(2.5f);
		pomaranczowe.SetActive(false);
		zielone.SetActive(true);
		yield return new WaitForSeconds(10);
		zielone.SetActive(false);
	}
}
