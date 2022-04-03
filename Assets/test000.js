#pragma strict
var dist = 2.0;
function Start () {

}

function Update () {
	//var hit : RaycastHit;
	
	
	//Physics.Raycast (transform.position, Vector3.back, hit, dist);
	//Debug.DrawRay (transform.position, Vector3.forward, Color.blue);
	//Debug.Log(hit.transform.name);
	
	CheckForGems();
	
}
//function CheckForGems() : Array{
function CheckForGems(){
   	var retval : Array=new Array();
    //CheckGem(transform.position, Vector3.up, retval);
    //CheckGem(transform.position, Vector3.right, retval);
    //CheckGem(transform.position, -Vector3.up, retval);
    //CheckGem(transform.position, -Vector3.right, retval);
    //CheckGem(transform.position, -Vector3.forward, retval);
   // CheckGem(transform.position, Vector3.back, retval);
   // CheckGem(transform.position, Vector3.forward, retval);
    //CheckGem(transform.position, -Vector3.back, retval);
    CheckGem(transform.position, Vector3.down, retval);
    CheckGem(transform.position, -Vector3.down, retval);
    CheckGem(transform.position, Vector3.left, retval);
    CheckGem(transform.position, -Vector3.left, retval);
    CheckGem(transform.position, Vector3.back, retval);
    CheckGem(transform.position, -Vector3.back, retval);
   // Debug.Log (retval);
    return retval;
   
}
function CheckGem(gameObject, direction : Vector3, array : Array){
	var hit : RaycastHit;
   	//Physics.Raycast (transform.position, direction, hit, dist);
	//Debug.DrawRay (transform.position, direction, Color.blue);
	//Debug.Log(hit.transform.name);
	Debug.DrawRay (transform.position, direction, Color.blue);
	if (Physics.Raycast (transform.position, direction, hit, dist)){
		//if	(hit.transform.gameObject.tag == transform.gameObject.tag) {
			//if (hit.transform.gameObject.GetComponent.<Renderer>().material.name == transform.gameObject.GetComponent.<Renderer>().material.name){
				// AddGem(array, object, tag);
				var object : GameObject;
				object = hit.transform.gameObject;
				Add (array, object);
				//}
			//}
	 } 
		
				//if(transform.gameObject.GetComponent.<Renderer>().material.name == hit.transform.gameObject.GetComponent.<Renderer>().material.name){
    	
        		//	Destroy(gameObject);
        		//	Destroy(hit.transform.gameObject);
       			// }
       
}
//function AddGem(array : Array, object : GameObject, tag : String){
    // if(object.tag==tag) array.Add(object);
//}
function Add(array : Array, object : GameObject) {
		//Debug.Log(array);
		//array.Add(object);
		//print(array.Length);
		//if (array.length >= 3 ) {
		//	print(array.length);
		//	Debug.Log(array);
		//}
		 //if(object.tag==tag) array.Add(object);
		
		 if	(object.tag == "beer") {
		 	if(object.GetComponent.<Renderer>().material.name == transform.gameObject.GetComponent.<Renderer>().material.name){
		 		array.Add(object);
		 			if (array.length >= 2) { 			 			
			 			//Destroy(object);
			 			for (var go in array){			 				
			 					Destroy(go);
			 					}
			 			//Destroy(gameObject);
		 			}
		 		//for (var go in array) {
		 		// Debug.DrawLine(go[i-1].transform.position, transform.position);
		 		//}
		 		//Destroy(gameObject);
		 		//Destroy(object);
		 	}
		 }
}