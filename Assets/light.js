#pragma strict
private var myLight : Light;
//var old_pos : float;
var wozek01 : GameObject;
//var ms : float;
function Start () {
		myLight = GetComponent(Light);
		myLight.enabled = false;
//		old_pos = wozek01.transform.position.x;
}

function Update () {
		var localVelocity = wozek01.transform.InverseTransformDirection(GetComponent.<Rigidbody>().velocity);
		Debug.Log(localVelocity.x);
		// localVelocity.x = Mathf.Clamp(localVelocity.x, -3.25, 3.25);
		 if (localVelocity.x > 0) {
		 	myLight.enabled = true;
		 }
//	 ms = wozek01.GetComponent.<Rigidbody>().velocity.magnitude;
//		if (Input.GetKey(KeyCode.S)){
// 			myLight.enabled = true;
// 			}
// 		else {
// 			myLight.enabled = false;
// 		}
// 		if (ms >0) {
// 			myLight.enabled = false;
// 		}
// 		if (ms <0) {
// 			myLight.enabled = true;
// 		}
 		
//			 if(old_pos < wozek01.transform.position.x){
//			 	//print("moving right");
//			 	myLight.enabled = false;
//			 }
//			 if(old_pos > wozek01.transform.position.x){
//			 	//print("moving left");
//			 	myLight.enabled = true;
//			 }
//			 old_pos = wozek01.transform.position.x;
}