using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class obrot : MonoBehaviour {

	int speed = 50;
	
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKey(KeyCode.Z) || Input.GetKey(KeyCode.JoystickButton0))
        {
            transform.Rotate(Vector3.left, speed * Time.deltaTime);
        }

        if (Input.GetKey(KeyCode.C) || Input.GetKey(KeyCode.JoystickButton2))
        {
            transform.Rotate(Vector3.right, speed * Time.deltaTime);
        }



        if (transform.eulerAngles.x >= 280)
        {
            int newint = 280;
            transform.eulerAngles = new Vector3(newint, transform.eulerAngles.y, transform.eulerAngles.z);
        }
    }
}
