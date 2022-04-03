using UnityEngine;
using System.Collections;

public class audio_listener : MonoBehaviour {

	public Camera[] allCams;
	public int renderCam;
	//public int a;
	public Transform _AudioListener;


	void Update () {

//		if (Input.GetKeyDown (KeyCode.B) || Input.GetKeyDown (KeyCode.JoystickButton11)) {
//
//			a++;
//
//			SetCamera(a);
//
//		}

	}
	public void SetCamera( int camNum )
	{
		allCams[renderCam].enabled = false;
		allCams[ camNum ].enabled = true;       // enable the selected camera
		
		// attach audio listner to camera
		_AudioListener.parent = allCams[ camNum ].transform;
		
		// align audio listener to camera (do after parent)
		_AudioListener.localPosition = Vector3.zero;
		_AudioListener.localRotation = Quaternion.identity;
		
		renderCam = camNum;                         //  save the current camera index

	}
}
