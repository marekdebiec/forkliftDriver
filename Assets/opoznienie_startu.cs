﻿using UnityEngine;
using System.Collections;

public class opoznienie_startu : MonoBehaviour {
	public float delay = 5.0f;

	// Use this for initialization
	void Start () {
		StartCoroutine(Jazda());
	}
	IEnumerator Jazda () {
		yield return new WaitForSeconds(delay);
		if(gameObject.GetComponent<CarUserControl2>()){
			gameObject.GetComponent<CarUserControl2>().enabled = true;
		}
	}
}
