using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class reset : MonoBehaviour {

	
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyUp(KeyCode.JoystickButton6) || Input.GetKeyUp(KeyCode.P))
		{

			// set the correct orientation for the car, and lift it off the ground a little
			transform.position += Vector3.up;
			transform.rotation = Quaternion.LookRotation(transform.forward);
		}
	}
}
