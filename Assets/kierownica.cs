using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class kierownica : MonoBehaviour {
	public int speed = 350;
	public Animator animator  ;
	public GameObject character5  ;

	void Awake()
	{
		animator = character5.GetComponent<Animator>();
	}
	
	
	// Update is called once per frame
	void Update () {
		float rotation = Input.GetAxis("Horizontal") * speed * Time.deltaTime;
		transform.Rotate(0, 0, rotation);
		//if (Input.GetKey(KeyCode.A) || Input.GetAxis("Horizontal"))
		if (Input.GetKey(KeyCode.A) )
		{
			transform.Rotate(Vector3.back, speed * Time.deltaTime);
			animator.SetBool("kieruje", true);
		}

		//else if (Input.GetKey(KeyCode.D) || Input.GetAxis("Horizontal"))
		else if (Input.GetKey(KeyCode.D))
		{
			transform.Rotate(Vector3.forward, speed * Time.deltaTime);
			animator.SetBool("kieruje", true);
		}
		else
		{
			animator.SetBool("kieruje", false);
		}
	}
}
