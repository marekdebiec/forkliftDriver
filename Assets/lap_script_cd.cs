using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class lap_script_cd : MonoBehaviour {
	public  GameObject guzik; 
	// Use this for initialization
	void Start () {
		guzik = GameObject.Find("Button");
		guzik.SetActive(false);
	}
	
	
	public void Zastosuj()
	{
		guzik.SetActive(true);
	}
}
