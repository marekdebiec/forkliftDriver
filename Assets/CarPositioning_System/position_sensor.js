#pragma strict
public var positionnumber = 0;
function Start () {

}

function Update () {

}

	function OnDrawGizmos () {
		// Draw a semitransparent blue cube at the transforms position
		Gizmos.color = Color (1,0,0,.5);
		Gizmos.DrawCube (Vector3(transform.position.x,transform.position.y+0.15,transform.position.z), Vector3 (0.3,0.3,0.3));
	}
