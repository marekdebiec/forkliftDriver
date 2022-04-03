using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class mod_change_cam : MonoBehaviour {

	// Use this for initialization
	void Start () {
		Opoznienie();
	}

	void Opoznienie()
	{
		//yield WaitForSeconds (0.01f);
		gameObject.GetComponent< change_cameras > ().zmienna = true;
	}

}
