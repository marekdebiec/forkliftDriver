#pragma strict

var speed = 5;
var point1 : GameObject;
var point2 : GameObject;

function Update () {		

		//var translation : float = Input.GetAxis ("Horizontal") * speed;
		var step = speed * Time.deltaTime;
		
		Debug.DrawLine(point1.transform.position, point2.transform.position, Color.magenta);
		
		
		
		//transform.Translate (0, translation, 0);
		
		if (Input.GetKey(KeyCode.R) || Input.GetKey(KeyCode.JoystickButton1))
   			transform.position = Vector3.MoveTowards(transform.position, point1.transform.position, step);
     		
     
     	if (Input.GetKey(KeyCode.F) || Input.GetKey(KeyCode.JoystickButton3))
   			transform.position = Vector3.MoveTowards(transform.position, point2.transform.position, step);

     		
}