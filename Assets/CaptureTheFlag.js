#pragma strict

 private var character : CharacterController;
 var obiekt : Transform;  
 var obiekt2 : Transform; 
 var patrolSpeed : float = 3; 
 var zlapany : boolean;
 
function Start () {
	zlapany = false;
	character = GetComponent(CharacterController);
}

function Update () {
	var target : Vector3 = obiekt.position;
	var target2 : Vector3 = obiekt2.position;
	 var moveDirection : Vector3 = target - transform.position;
	 var moveDirection2 : Vector3 = target2 - transform.position;
	 var targetRotation ; 
	 if (zlapany == true) {
	 	targetRotation = Quaternion.LookRotation(obiekt2.transform.position - transform.position);
	 	transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, 10 * Time.deltaTime);
	 	character.Move(moveDirection2.normalized * patrolSpeed * Time.deltaTime);
	 	}
	 else {
	 	targetRotation = Quaternion.LookRotation(obiekt.transform.position - transform.position);
	 	transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, 10 * Time.deltaTime);
	 	character.Move(moveDirection.normalized * patrolSpeed * Time.deltaTime);
	 }
	// if (transform.position == obiekt2.transform.position) {
	 	//Destroy (this);
	// }
	 var distance = Vector3.Distance (obiekt2.transform.position, transform.position);
	 if (distance < 1.0) {
	 	Destroy (this);
	 	}
}
function OnTriggerEnter () {
		zlapany = true;
		//return zlapany;
	}
function OnTriggerExit () {
	zlapany = false;
}