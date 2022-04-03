#pragma strict
var target : GameObject;
var napis : GameObject;
function Start () {
	 napis.SetActive(false);
}

function Update () {
var distance = Vector3.Distance(target.transform.position, transform.position);
//Debug.Log("<color=green>dystans </color>" + distance);
	if (distance < 3){
		
		if(Input.GetKeyUp("left ctrl")){
		 
        napis.SetActive(true);
        Budzik();
        
         }
         }
    
		// Prints 5.0
		print (Time.time);
         if (distance > 3){
         	 
	
        napis.SetActive(false);
                
         }
}


function Budzik () {
	// Waits 5 seconds
		yield WaitForSeconds (5);
		if (Time.time > 5){
			napis.SetActive(false);
		}
}