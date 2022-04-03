using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class lights : MonoBehaviour {
	//var myLight : Light;
	//var myLight2 : Light;
	//var zarowka : GameObject;
	//var zarowka2 : GameObject;
	public Light myLight;
	public Light myLight2;
	public GameObject zarowka;
	public GameObject zarowka2;

	// Use this for initialization
	void Start () {
		myLight = zarowka.GetComponent<Light>();
		myLight.enabled = false;
		myLight2 = zarowka2.GetComponent<Light>();
		myLight2.enabled = false;
	}
	
	// Update is called once per frame
	void Update () {
		var audio  = GetComponent< AudioSource > ();
		var localVelocity = transform.InverseTransformDirection(GetComponent <Rigidbody>().velocity);

		// localVelocity.x = Mathf.Clamp(localVelocity.x, -3.25, 3.25);
		if (localVelocity.z <= 0)
		{
			myLight.enabled = true;
			myLight2.enabled = true;

		}
		else if (localVelocity.z > 0)
		{
			myLight.enabled = false;
			myLight2.enabled = false;
			audio.PlayDelayed(0.5f);
			//audio.Play();
		}
	}
}
