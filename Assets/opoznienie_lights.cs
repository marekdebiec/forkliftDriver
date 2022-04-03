using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class opoznienie_lights : MonoBehaviour {
	//var delay : float = 5;
		public float delay = 5.0f;
	// Use this for initialization
	void Start () {
		
		StartCoroutine(ExampleCoroutine666());
	}
	
	
	
	private IEnumerator ExampleCoroutine666()
		{
			yield return new WaitForSeconds(delay);
			if (GetComponent<lights>())
			{
				GetComponent<lights>().enabled = true;
			}
	}
	}
