using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class nitro1 : MonoBehaviour {
	public GameObject nitro  ;
	 public float staraPredkosc ;
	public float nowaPredkosc ;

	// Use this for initialization
	void Start () {
		Nitro();
	}	
	void Nitro()
	{

		for (; ; )
		{
			StartCoroutine(ExampleCoroutine23456());
		}
}
IEnumerator ExampleCoroutine23456()
{
		yield return new WaitForSeconds(Random.Range(0, 10.0f));
		nitro.SetActive(true);
		transform.parent.GetComponent<airace>().patrolSpeed = nowaPredkosc;
		yield return new WaitForSeconds(2);
		nitro.SetActive(false);
		transform.parent.GetComponent<airace>().patrolSpeed = staraPredkosc;
	}
}
