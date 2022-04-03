using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class position_sensor : MonoBehaviour {
	public int positionnumber = 0;
	
	public void OnDrawGizmos()
	{
		// Draw a semitransparent blue cube at the transforms position
		Gizmos.color = new Color(1, 0, 0, .5f);
		Gizmos.DrawCube(new Vector3(transform.position.x, transform.position.y + 0.15f, transform.position.z), new Vector3(0.3f, 0.3f, 0.3f));
	}
}
