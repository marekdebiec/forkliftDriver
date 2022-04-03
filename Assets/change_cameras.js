#pragma strict

var cameras : Camera[];
private var currentCameraIndex : float;

var allCams : Camera[] ;
var renderCam : float;	
var zmienna : boolean;
var  _AudioListener : Transform;

function Start() { 
	currentCameraIndex = 0;
	
	 //Turn all cameras off, except the first default one
         for (var i=1; i<cameras.Length; i++) 
         {
             cameras[i].gameObject.SetActive(false);
         }
          //If any cameras were added to the controller, enable the first one
         if (cameras.Length>0)
         {
             cameras [0].gameObject.SetActive (true);
             Debug.Log ("Camera with name: " + cameras [0].GetComponent.<Camera>().name + ", is now enabled");
         }


}
function Update() {
		  //If the c button is pressed, switch to the next camera
         //Set the camera at the current index to inactive, and set the next one in the array to active
         //When we reach the end of the camera array, move back to the beginning or the array.
         if (Input.GetKeyDown(KeyCode.B) || Input.GetKeyDown(KeyCode.JoystickButton11) || zmienna == true) {
         	
         	
         	
         	
             currentCameraIndex ++;
             
             
             
             Debug.Log ("B button has been pressed. Switching to the next camera");
             if (currentCameraIndex < cameras.Length)
             {
             	
                 cameras[currentCameraIndex-1].gameObject.SetActive(false);
                 cameras[currentCameraIndex].gameObject.SetActive(true);
                 Debug.Log ("Camera with name: " + cameras [currentCameraIndex].GetComponent.<Camera>().name + ", is now enabled");
             }
             else
             {
                 cameras[currentCameraIndex-1].gameObject.SetActive(false);
                 currentCameraIndex = 0;
                 cameras[currentCameraIndex].gameObject.SetActive(true);
                 Debug.Log ("Camera with name: " + cameras [currentCameraIndex].GetComponent.<Camera>().name + ", is now enabled");
             }
             SetCamera(currentCameraIndex);
             zmienna = false;
         } 
}
function SetCamera( camNum : float )
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
//function SetCamera( camNum : float )
//	{
//		allCams[renderCam].enabled = false;
//		allCams[ camNum ].enabled = true;       // enable the selected camera
//		
//		// attach audio listner to camera
//		_AudioListener.parent = allCams[ camNum ].transform;
//		
//		// align audio listener to camera (do after parent)
//		_AudioListener.localPosition = Vector3.zero;
//		_AudioListener.localRotation = Quaternion.identity;
//		
//		renderCam = camNum;                         //  save the current camera index
//	}
       
