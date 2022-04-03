#pragma strict
var damping = 1.0;
var drivespeed = 15;
var target :  Transform;
var zmienna : boolean;
var speed = 5;
var czas = 0.0f;

function Start () {
	GetComponent.<Renderer>().enabled = false;
	GetComponent.<BoxCollider>().enabled = false;
}
function Update () {
		if (zmienna) {			
	 		Ruch ();
		}
}
function Ruch () {
		yield WaitForSeconds(czas);
		GetComponent.<Renderer>().enabled = true;
		GetComponent.<BoxCollider>().enabled = true;
		transform.Translate(Vector3.forward * Time.deltaTime * speed);	
		yield WaitForSeconds(3);
		transform.Translate(Vector3.forward * Time.deltaTime * drivespeed);         
        	 var rotation = Quaternion.LookRotation(target.position - transform.position);
        	// var rotation = Quaternion.LookRotation(FindClosestEnemy().transform.position - transform.position);
			transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
}