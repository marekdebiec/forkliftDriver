using UnityEngine;
using System.Collections;

public class SpawnJewels : MonoBehaviour {
	
	public int xRange = 10;
	//public int yRange = 3;
	Vector3 spawnLoc; 
	public int numObjects = 16;

	public Material [] MyMaterial = new Material [6];
	public GameObject[] objects;

	// Use this for initialization
	void Start () 
	{
		Spawn ();
		//Spawn2 ();
	}

	bool CheckNear(GameObject [] objs) {
		int g;
		for (g=0; g<objs.Length; g++) {
			if(objs[g] == gameObject){ continue;}
			
			if(Mathf.Abs(objs[g].transform.position.x - spawnLoc.x) > 1.0f){// &&
			  // Mathf.Abs(objs[g].transform.position.y - position.y) < 2.0f)
				
				return true;}
		}
		return false;
	}
	void Spawn()
	{
		GameObject [] objs = GameObject.FindGameObjectsWithTag ("beer");

		for (int i = 0; i <= numObjects; i++)
		{
			spawnLoc = new Vector3 (Random.Range (-xRange, xRange), 1, 0.2f);
			spawnLoc.x =  Mathf.RoundToInt(spawnLoc.x);
			if(CheckNear(objs) == false){
				return;}

			int objectPick = Random.Range (0, objects.Length);
			Instantiate(objects[objectPick], spawnLoc, Quaternion.identity);
			//objects.tag = "podniesiony";

			int cos = Random.Range (0,2);
			objects[objectPick].GetComponent<Renderer>().material = MyMaterial[cos];

		}



	}


	void Spawn2()
	{
		 int numObjects2 = Random.Range (0,3);
	
		float h = 0;
		for (int i = 0; i <= numObjects2; i++)
		{

			Vector3 spawnLoc = new Vector3 (0, h++ , 10);
			int objectPick = Random.Range (0, objects.Length);
			Instantiate(objects[objectPick], spawnLoc, Quaternion.identity);
			
			int cos = Random.Range (0,2);
			objects[objectPick].GetComponent<Renderer>().material = MyMaterial[cos];

		}
		
		
	}
}