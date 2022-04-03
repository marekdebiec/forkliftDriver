#pragma strict

var speed = 350;
var animator : Animator;
var character5 : GameObject;

function Awake () {
	animator = character5.GetComponent(Animator);
}
function Update () {
		var rotation : float = Input.GetAxis ("Horizontal") * speed * Time.deltaTime;
 		transform.Rotate(0, 0, rotation);
	  if (Input.GetKey(KeyCode.A) || Input.GetAxis("Horizontal")) {
	      transform.Rotate(Vector3.back, speed * Time.deltaTime);
	      animator.SetBool ("kieruje", true);
	      }
	      
	 else if (Input.GetKey(KeyCode.D) || Input.GetAxis("Horizontal")) {
	      transform.Rotate(Vector3.forward, speed * Time.deltaTime);
	       animator.SetBool ("kieruje", true);
	      }
	  else {
	      	animator.SetBool ("kieruje", false);
	      }
      
     
 
 }