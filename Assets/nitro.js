#pragma strict

var nitro : GameObject;
var wozek : GameObject;
var kamera1 : Camera;
var kamera2 : Camera;
var kamera3 : Camera;
var predkosc : float = 0.5;



function Update () {
			//var audio: AudioSource = GetComponent.<AudioSource>();
			var localVelocity = transform.InverseTransformDirection(GetComponent.<Rigidbody>().velocity);
			
		//	var otherScript: carcontroller1 = wozek.GetComponent("carcontroller1"); 
			var otherScript2: MotionBlur = kamera1.GetComponent("MotionBlur"); 
			var otherScript3: MotionBlur = kamera2.GetComponent("MotionBlur"); 
			var otherScript4: MotionBlur = kamera3.GetComponent("MotionBlur"); 
	if (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.JoystickButton7)) {
	 if (localVelocity.z > 0) {
		if (wozek.GetComponent.<Rigidbody>().velocity.magnitude > predkosc) {
			
			nitro.SetActive (true);
			
			otherScript2.enabled = true;
			otherScript3.enabled = true;
			otherScript4.enabled = true;
			//otherScript.enginePower = 100000; 
			//gameObject.GetComponent.<Rigidbody>().AddForce(transform.forward * 1000);
			//var speednitro = wozek.GetComponent.<Rigidbody>().velocity.magnitude;
			}
			}
	}
	
	else {	
			
			nitro.SetActive (false);
		//	otherScript.enginePower = 150.0;
			otherScript2.enabled = false;
			otherScript3.enabled = false;
			otherScript4.enabled = false;
			}
			//if (Input.GetAxis("Vertical")) {
				//if (localVelocity.z > 0) {
						//audio.PlayDelayed(0.5);
//						
						//audio.Play(22050);
//						yield WaitForSeconds (5);
				//}
			//}
	//else {
		//	audio.Stop();
	//}
}