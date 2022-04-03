using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class zniszczenie : MonoBehaviour {

	//var canvas : GameObject;
	//var obrazek01 : GameObject;
	//var obrazek02 : GameObject;
	//var obrazek03 : GameObject;
	//var obrazek04 : GameObject;
	//var obrazek05 : GameObject;
	//var obrazek06 : GameObject;

	//function Start () {
	//		canvas = GameObject.Find("Canvas");	  	
	//		obrazek01 = canvas.transform.GetChild(13).gameObject;
	//   		obrazek02 = canvas.transform.GetChild(12).gameObject;
	//        obrazek03 = canvas.transform.GetChild(11).gameObject;
	//        obrazek04 = canvas.transform.GetChild(10).gameObject;
	//        obrazek05 = canvas.transform.GetChild(9).gameObject;
	//        obrazek06 = canvas.transform.GetChild(8).gameObject;
	//}

	// Update is called once per frame
	void Update () {
		Autodestrukcja();
	}
	void Autodestrukcja()
	{
		StartCoroutine(ExampleCoroutine888());

	}
	private IEnumerator ExampleCoroutine888()
    {
		yield return new WaitForSeconds(30);
		Destroy(gameObject);
	}
}
