using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class new_script_shield : MonoBehaviour {
	GameObject wozek  ;
	// Use this for initialization
	void Start () {
		wozek = GameObject.Find("wozek01");
	}
	
	// Update is called once per frame
	void Update () {
		StartCoroutine(ExampleCoroutine356999());
	}
	
	void OnTriggerEnter(Collider other  )
	{
		if (other.tag == "weapon")
		{
			Destroy(other.gameObject);
		}
	}
	private IEnumerator ExampleCoroutine356999()
	{
		yield return new WaitForSeconds(10);
		wozek.GetComponent< aktywacja > ().powerup = false;
		wozek.GetComponent< aktywacja > ().bariera = false;
		gameObject.SetActive(false);
	}
}
