#pragma strict

//var cam1 : Camera; 
//var cam2 : Camera;
var cam1 : GameObject; 
var cam2 : GameObject;
var cam3 : GameObject;
var kamera_daleka : Camera;

//private var isActive:boolean;

function Awake() {
		kamera_daleka.enabled = false;
}
function Start() { 
	
	//cam1.enabled = true; 
	//cam2.enabled = false; 
	cam1.SetActive (true);
	cam2.SetActive (false);

}

function Update() {

 if (Input.GetKeyDown(KeyCode.B) || Input.GetKeyDown(KeyCode.JoystickButton11)) {
    // cam1.enabled = !cam1.enabled;
   //  cam2.enabled = !cam2.enabled;
    
    
    if (cam1.activeSelf) {
    	cam1.SetActive(false);
    	cam2.SetActive(true);
    	}
    else  {
    	cam1.SetActive(true);
    	cam2.SetActive(false);
    	}
    	
 		
 }
	 if (Input.GetKeyDown(KeyCode.F1) || Input.GetKeyDown(KeyCode.JoystickButton10)) {
	 	if (kamera_daleka.enabled == false)
	 		{
	 			kamera_daleka.enabled = true;	
	 		}
	 	else {
	 		kamera_daleka.enabled = false;
	 	}
	 }
 
}