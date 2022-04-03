using UnityEngine;
using System.Collections;

public class opoznienie_staru2 : MonoBehaviour {
	public float delay = 5.0f;

	// Use this for initialization
	void Start () {
		StartCoroutine(Jazda());
	}
	IEnumerator Jazda () {
		yield return new WaitForSeconds(delay);
		//if(gameObject.GetComponent<CarUserControl>()){
			//gameObject.GetComponent<CarController>().enabled = true;
		gameObject.GetComponent<CarAIControl>().driving = true;
		//}
	}
}
