using UnityEngine;
using System.Collections;

public class bejeweled2 : MonoBehaviour {
	int gameSize = 6; 
	public GameObject [] MyGems = new GameObject [6];
	public Material [] MyMaterial = new Material [6];
	void Start () 
	{
		for(int x = 0;x < 6 ; x++)
		{
			for(int y = 0;y < 6 ; y++)
			{
				int RandomNumber = Random.Range (0,6);
				Debug.Log ( RandomNumber );
				if(RandomNumber == 0)
				{
					
					Instantiate (MyGems[RandomNumber],new Vector3(x,y,0),MyGems[RandomNumber].transform.rotation);
					MyGems[RandomNumber].GetComponent<Renderer>().material = MyMaterial[RandomNumber];
				}
				
				if(RandomNumber == 1)
				{
					
					Instantiate (MyGems[RandomNumber],new Vector3(x+0.35f,y-0.0f,0f),MyGems[RandomNumber].transform.rotation);
					MyGems[RandomNumber].GetComponent<Renderer>().material = MyMaterial[RandomNumber];
				}
				if(RandomNumber == 2)
				{
					
					Instantiate (MyGems[RandomNumber],new Vector3(x+0.05f,y+0f,0.0f),MyGems[RandomNumber].transform.rotation);
					MyGems[RandomNumber].GetComponent<Renderer>().material = MyMaterial[RandomNumber];
				}
				if(RandomNumber == 3)
				{
					
					Instantiate (MyGems[RandomNumber],new Vector3(x+0.0f,y-0.2f,0),MyGems[RandomNumber].transform.rotation);
					MyGems[RandomNumber].GetComponent<Renderer>().material = MyMaterial[RandomNumber];
				}
				if(RandomNumber == 4)
				{
					
					Instantiate (MyGems[RandomNumber],new Vector3(x+0.0f,y+0.94f,0.0f),MyGems[RandomNumber].transform.rotation);
					MyGems[RandomNumber].GetComponent<Renderer>().material = MyMaterial[RandomNumber];
				}
				if(RandomNumber == 5)
				{
					
					Instantiate (MyGems[RandomNumber],new Vector3(x,y,0),MyGems[RandomNumber].transform.rotation);
					MyGems[RandomNumber].GetComponent<Renderer>().material = MyMaterial[RandomNumber];
				}

}
		}
	}
}
