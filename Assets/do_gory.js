#pragma strict
var speed = 5;
//var pos: Vector3;
function Start () {

}

function Update () {
if (Input.GetKey(KeyCode.Q))
   
     transform.Translate(Vector3.forward * speed * Time.deltaTime);
    // transform.position.y = Mathf.Clamp(speed * Time.deltaTime, -0.0812, 0.1461);
   //  Debug.Log ("wysokosc" + transform.position.z);
      
  if (Input.GetKey(KeyCode.E))
      transform.Translate(Vector3.back * speed * Time.deltaTime);
         //  transform.position.y = Mathf.Clamp(speed * Time.deltaTime, -0.0812, 0.1461);


		//pos = transform.position;
		//pos.y = Mathf.Clamp(pos.y, 1, -1s);
		//transform.position = pos;
		if (transform.position.y<= -0.0574142){
			transform.position.y =  -0.0574142;}
		if (transform.position.y>=3){
			transform.position.y = 3;}
			Debug.Log (transform.position.y);
}