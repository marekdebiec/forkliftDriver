using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class woda : MonoBehaviour {
	public GameObject[]  punkty  ;
	public GameObject wozek  ;
	public GameObject closestObject  ;
	 
	
	// Update is called once per frame
	void Update () {
		foreach (GameObject obj   in punkty)
		{
			if (!closestObject)
			{
				closestObject = obj;
			}
			//compares distances
			if (Vector3.Distance(wozek.transform.position, obj.transform.position) <= Vector3.Distance(wozek.transform.position, closestObject.transform.position))
			{
				closestObject = obj;
			}
		}
	}
	void OnTriggerEnter(Collider other  )
	{

		if (other.name == "Colliders")
		{
			other.transform.parent.gameObject.transform.position = new Vector3(closestObject.transform.position.x, 10, closestObject.transform.position.z);
		}

	}
}
