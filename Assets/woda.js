#pragma strict
var punkty : GameObject[];
var wozek : GameObject;
var closestObject : GameObject;

function OnTriggerEnter (other : Collider) {
		
		if(other.name=="Colliders") {
			other.transform.parent.gameObject.transform.position = Vector3(closestObject.transform.position.x, 10, closestObject.transform.position.z);
		}
		
	}
function Update () {	 
	 
	for (var obj : GameObject in punkty)
     {
         if(!closestObject)
         {
            closestObject = obj;
         }
         //compares distances
         if(Vector3.Distance(wozek.transform.position, obj.transform.position) <= Vector3.Distance(wozek.transform.position, closestObject.transform.position))
         {
            closestObject = obj;
         }
     }
     
}