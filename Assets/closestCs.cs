using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class closestCs : MonoBehaviour {

	public GameObject target1;
	public GameObject target2;
	public GameObject target3;
	public GameObject target4;
	 GameObject[] gos;
	//public List<GameObject> gos;
	// Use this for initialization
	void Start () {
		target1 = GameObject.FindGameObjectWithTag("Player");
		target2 = GameObject.FindGameObjectWithTag("woman");
		target3 = GameObject.FindGameObjectWithTag("caveman");
		target4 = GameObject.FindGameObjectWithTag("alien");
	}
	
	// Update is called once per frame
	void Update () {
		//Debug.Log(FindClosestEnemy().name);
	}
	//Find the name of the closest enemy
	//void FindClosestEnemy () : GameObject {
	public void FindClosestEnemy (GameObject closest) {
		//GameObject[] gos;    
		
		//gos[0] = target1;
		//gos[1] = target2;
		// gos[2] = target3;
		//gos[3] = target4;
		
		//GameObject closest = null; 
		float distance  = Mathf.Infinity; 
		Vector3 position = transform.position; 
		// Iterate through them and find the closest one
		foreach (GameObject go  in gos)  { 
			Vector3 diff = (go.transform.position - position);
			float curDistance = diff.sqrMagnitude; 
			if (curDistance < distance) { 
				closest = go; 
				distance = curDistance; 
			} 
		} 
		return;    
	}
}
