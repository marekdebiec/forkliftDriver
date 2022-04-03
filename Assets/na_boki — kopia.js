#pragma strict
var speed = 5;
var point3 : GameObject;
var point4 : GameObject;



function Update () {
		var step = speed * Time.deltaTime;
		Debug.DrawLine(point3.transform.position, point4.transform.position, Color.cyan);
		if (Input.GetKey(KeyCode.R) || Input.GetKey(KeyCode.JoystickButton1))
   			transform.position = Vector3.MoveTowards(transform.position, point3.transform.position, step);
     	
     
     	if (Input.GetKey(KeyCode.F) || Input.GetKey(KeyCode.JoystickButton3))
   			transform.position = Vector3.MoveTowards(transform.position, point4.transform.position, step);

     
}