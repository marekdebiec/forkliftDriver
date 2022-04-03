using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class new_script_miejsce : MonoBehaviour {

	private Camera kamerka ;
	
	// Update is called once per frame
	void Update () {
		kamerka = Camera.main;
		//transform.rotation = new Quaternion( 0.0f, -kamerka.transform.rotation.y, 0.0f, transform.rotation.w );
		gameObject.transform.LookAt(kamerka.transform);

	}
}
