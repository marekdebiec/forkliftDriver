using UnityEngine;
using System.Collections;

public class CarControlling : MonoBehaviour {

	//public float speed = 0.2f;
	//float moveVertical;


	

	void Update () {
		float temp = Input.acceleration.y;
		//moveVertical = Input.GetAxis ("Vertical");



					//transform.Translate (0, 0, temp);


		//transform.Rotate (0, temp, 0); 

		if (Input.touchCount == 1) {

			transform.Translate (0, 0, temp);
		}
	}
}
