#pragma strict

var speed = 5;
var dystans : float = 6;
var maszt2 : GameObject;
var dystans_maszt2 : Vector3;

function Update () {
	dystans_maszt2 = maszt2.transform.position;
	var audio: AudioSource = GetComponent.<AudioSource>();

	if (Input.GetKey(KeyCode.Q) || Input.GetKey(KeyCode.JoystickButton5)){
	   //do góry
	   	if (transform.position.y < dystans){
	     		transform.Translate(Vector3.up * speed * Time.deltaTime, Space.Self);
	     		
	     }
	     
	      if (transform.position.y > 3 && transform.position.y < dystans)
				  {
				  //	maszt2.transform.Translate(Vector3.forward * speed * Time.deltaTime, Space.Self);
				  	maszt2.transform.Translate(Vector3.up * speed * Time.deltaTime, Space.World);
				 	//maszt2.transform.localPosition = Vector3(0, 0, 1 * speed * Time.deltaTime);

				  }
	     }
	   if (Input.GetKeyDown(KeyCode.Q) || Input.GetKeyDown(KeyCode.JoystickButton5)) {
	   	if (transform.position.y < dystans){
	     			
	     		
	     			audio.Play();
	     		

	     }
	   	
	   }
	   if (Input.GetKeyDown(KeyCode.E) || Input.GetKeyDown(KeyCode.JoystickButton4)) {
	   	if (transform.position.y > 0){
	     			
	     		
	     			audio.Play();

	     }
	   	
	   }
	      
	  if (Input.GetKey(KeyCode.E) || Input.GetKey(KeyCode.JoystickButton4)){
	  	//na dół
	  	if (transform.position.y > 0){
	      		transform.Translate(-Vector3.up * speed * Time.deltaTime, Space.Self);
	      		
	      }
	     if (transform.position.y > 0 && transform.position.y <3)
				 {
				  	//maszt2.transform.Translate(-Vector3.forward * speed * Time.deltaTime, Space.Self);
					maszt2.transform.Translate(-Vector3.up * speed * Time.deltaTime, Space.World);
				 }

	      }
	      maszt2.transform.position.y = Mathf.Clamp (maszt2.transform.position.y, 0.850, 3.735);
		//maszt2.transform.position.x = Mathf.Clamp (maszt2.transform.position.x, 0.850, 3.735);
		//maszt2.transform.position.z = Mathf.Clamp (maszt2.transform.position.z, 0.850, 3.735);
	        
	  //maksymalny dystans   
	 // transform.position.y = Mathf.Clamp (transform.position.y, 0, 3.5);
	      
    
}