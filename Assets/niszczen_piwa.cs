using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class niszczen_piwa : MonoBehaviour {

	
	void OnTriggerEnter( Collider other)
	{
		if (other.tag == "beer")
		{
			Destroy(other);
		}
	}
}
