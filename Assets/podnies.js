#pragma strict


function OnTriggerStay(other : Collider) {

 		Debug.Log (other.gameObject.tag);
if (other.gameObject.tag == "beer")
	// other.gameObject.transform.parent=transform; //attach the object to the ... so it moves along with it.
	// other.gameObject.transform.parent=transform; //attach the object to the ... so it moves along with it.
		other.transform.position=transform.position; 
}