using UnityEngine;
using System.Collections;

public class Wlacz : MonoBehaviour {

	private ProtectCameraFromWallClip yetAnotherScript;
	private ProtectCameraFromWallClip yetAnotherScript2;
	public GameObject kamerka;
	public GameObject kamerka2;


	// Use this for initialization
	void Start () {
		//kamerka.SetActive (false);

		//yetAnotherScript.enabled = false;
	}
	
	// Update is called once per frame
	void Update () {
		if (kamerka.active) {
			yetAnotherScript = kamerka.GetComponent<ProtectCameraFromWallClip>();
			yetAnotherScript.enabled = true;
			yetAnotherScript2 = kamerka2.GetComponent<ProtectCameraFromWallClip>();
			yetAnotherScript2.enabled = false;
		}
		else if (!kamerka.active) {
			yetAnotherScript.enabled = false;
			yetAnotherScript2.enabled = true;
		}
	}
}
