using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class new_script_start : MonoBehaviour {

	public GameObject obrazek01 ;
	public  GameObject obrazek02 ;
	public GameObject obrazek03 ;
	public GameObject obrazek04 ;
	public GameObject obrazek05 ;
	public GameObject obrazek06  ;

	// Use this for initialization
	void Start () {
		if (obrazek01)
		{
			obrazek01.SetActive(false);
		}
		if (obrazek02)
		{
			obrazek02.SetActive(false);
		}
		if (obrazek03)
		{
			obrazek03.SetActive(false);
		}
		if (obrazek04)
		{
			obrazek04.SetActive(false);
		}
		if (obrazek05)
		{
			obrazek05.SetActive(false);
		}
		if (obrazek06)
		{
			obrazek06.SetActive(false);
		}
	}
	
	
}
