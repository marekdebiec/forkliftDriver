using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class skrypt_gdy_zakrety : MonoBehaviour {
	public GameObject strzalka  ;
	
	void OnTriggerEnter(Collider other )
	{
		if (other.name == "Colliders")
		{
			strzalka.SetActive(true);
		}
	}
	void OnTriggerExit(Collider other  )
	{
		if (other.name == "Colliders")
		{
			strzalka.SetActive(false);
		}
	}
	void OnDrawGizmos()
	{

		Gizmos.color = new Color(1, 0, 0, .2f);
		Gizmos.DrawCube(gameObject.transform.position, new Vector3(transform.localScale.x, transform.localScale.y, transform.localScale.z));
	}
}
