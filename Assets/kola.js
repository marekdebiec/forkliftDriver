#pragma strict
var speed = 50;
function Start () {

}

function Update () {
 
  if (Input.GetKey(KeyCode.A))
   
     transform.Rotate(Vector3.down, speed * Time.deltaTime, Space.World);
      
  if (Input.GetKey(KeyCode.D))
      transform.Rotate(Vector3.up, speed * Time.deltaTime, Space.World);
      
 // if (transform.eulerAngles.y >= 45)
       //  transform.eulerAngles.y = 45;
  

      //  Debug.Log (transform.eulerAngles.y);
 }