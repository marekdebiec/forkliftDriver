using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class change_cameras : MonoBehaviour {
	//	var cameras : Camera[];
	//private var currentCameraIndex : float;

	//var allCams : Camera[] ;
	//var renderCam : float;	
	//var zmienna : boolean;
	//var _AudioListener : Transform;
	public Camera[] cameras;
	private float currentCameraIndex;
	public Camera[] allCams;
	public float renderCam;
	public bool zmienna;
	public Transform _AudioListener;

	// Use this for initialization
	void Start () {
		currentCameraIndex = 0.0f;

		//Turn all cameras off, except the first default one
		for (var i = 1; i < cameras.Length; i++)
		{
			cameras[i].gameObject.SetActive(false);
		}
		//If any cameras were added to the controller, enable the first one
		if (cameras.Length > 0)
		{
			cameras[0].gameObject.SetActive(true);
			Debug.Log("Camera with name: " + cameras[0].GetComponent< Camera > ().name + ", is now enabled");
		}

	}

	// Update is called once per frame
	void Update () {
		//If the c button is pressed, switch to the next camera
		//Set the camera at the current index to inactive, and set the next one in the array to active
		//When we reach the end of the camera array, move back to the beginning or the array.
		if (Input.GetKeyDown(KeyCode.B) || Input.GetKeyDown(KeyCode.JoystickButton11) || zmienna == true)
		{




			currentCameraIndex++;



			Debug.Log("B button has been pressed. Switching to the next camera");
			if (currentCameraIndex < cameras.Length)
			{

				 cameras[(int)currentCameraIndex - 1].gameObject.SetActive(false) ;
				cameras[(int)currentCameraIndex].gameObject.SetActive(true);
				Debug.Log("Camera with name: " + cameras[(int)currentCameraIndex].GetComponent< Camera > ().name + ", is now enabled");
			}
			else
			{
				cameras[(int)currentCameraIndex - 1].gameObject.SetActive(false);
				currentCameraIndex = 0;
				cameras[(int)currentCameraIndex].gameObject.SetActive(true);
				Debug.Log("Camera with name: " + cameras[(int)currentCameraIndex].GetComponent< Camera > ().name + ", is now enabled");
			}
			SetCamera(currentCameraIndex);
			zmienna = false;
		}
	}
	void SetCamera(float camNum )
	{
		allCams[(int)renderCam].enabled = false;
		allCams[(int)camNum].enabled = true;       // enable the selected camera

		// attach audio listner to camera
		_AudioListener.parent = allCams[(int)camNum].transform;

		// align audio listener to camera (do after parent)
		_AudioListener.localPosition = Vector3.zero;
		_AudioListener.localRotation = Quaternion.identity;

		renderCam = camNum;                         //  save the current camera index

	}
}
