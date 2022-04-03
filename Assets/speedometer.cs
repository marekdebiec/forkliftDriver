﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class speedometer : MonoBehaviour {
	//var kphDisplay : GUIText;
	//var msDisplay : GUIText;
	//var ms : float;
	//var kph : float;

		////var kph = rigidbody.velocity.magnitude * 3.6;
		////var mph = rigidbody.velocity.magnitude * 2.237;
		////mphDisplay.text = mph + " MPH";
        ///
	public Text kphDisplay;
	public Text msDisplay;
	public float ms;
	public float kph;

	
	
	// Update is called once per frame
	void Update () {
		var ms = GetComponent< Rigidbody > ().velocity.magnitude;
		//var mph = GetComponent.<Rigidbody>().velocity.magnitude * 2.237;
		var kph = GetComponent< Rigidbody > ().velocity.magnitude * 3.6f;
		//Mathf.Round(kph);
		//Round(kph, 2);
		//Mathf.decimal(kph, 2);
		kphDisplay.text = Mathf.Round(kph) + " km/h";
		msDisplay.text = Mathf.Round(ms) + " m/s";
	}
}
