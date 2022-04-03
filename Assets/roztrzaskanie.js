#pragma strict
private var rb: Rigidbody;
//var wielkosc : float = 0.1f;
//var jakisMaterial : Material;
//public var paleta: GameObject;
public var prefab: GameObject;



function Start () {
	rb = GetComponent.<Rigidbody>();
	//paleta = this.gameObject.transform.GetChild(0).gameObject;
}
function OnCollisionEnter (other: Collision) {
	
	 if(other.gameObject.tag == "ground"){
	 		if (rb.velocity.y >= -30.0f) {
	 	//if (rb.velocity.y >= wielkosc) {
	 		//if (rb.velocity.magnitude >= wielkosc) {
	 			//if (rb.velocity.y != 0) {
		             Instantiate(prefab, transform.position, Quaternion.identity);
		             Destroy(gameObject);
		             }
				//}
		         // GetComponent.<Renderer>().material = jakisMaterial;
		         // paleta.GetComponent.<Renderer>().material = jakisMaterial;
	        //}
	   
	 
	  
	   
	 }
}