using UnityEngine;
using System.Collections;

public class probny01 : MonoBehaviour {


	
	// Update is called once per frame
	void Update () {
		float temp = Input.acceleration.x;
		Debug.Log (temp);
		transform.Rotate (0, temp, 0); 
	}
}
