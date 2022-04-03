#pragma strict
var speed = 50;

function Update () {
	//var rotation : float = Input.GetAxis ("maszt") * speed * Time.deltaTime;
	
	
	//transform.eulerAngles.z = 0;	
	
	//transform.Rotate(rotation, 0, 0);
	
  if (Input.GetKey(KeyCode.Z) || Input.GetKey(KeyCode.JoystickButton0) )  {
    	 transform.Rotate(Vector3.left, speed * Time.deltaTime);
     }
      
  if (Input.GetKey(KeyCode.C) || Input.GetKey(KeyCode.JoystickButton2)){
     	 transform.Rotate(Vector3.right, speed * Time.deltaTime);
      }
      
      
      
   if (transform.eulerAngles.x >= 280){
         transform.eulerAngles.x = 280;
     }  
     
   // if (transform.eulerAngles.x <= 284){
    //     transform.eulerAngles.x = 284;
   //  }
}