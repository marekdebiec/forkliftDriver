// script by @effendiilham

using UnityEngine;
using System.Collections;

public class Agent : MonoBehaviour {

	public Path path;
	public float reachDistance = 1f;
	public bool drawGizmos = false;
	public float speed = 5f;
	public float rotSpeed = 10f;
	private int currentNodeID = 0;

	void Start () {
	
	}

	void Update () {
		Vector3 dest = path.GetNodePos (currentNodeID);
		Vector3 offset = dest - transform.position;
		if (offset.sqrMagnitude > reachDistance) {
			offset = offset.normalized;
			transform.Translate (offset * speed * Time.deltaTime, Space.World);
			
			Quaternion lookRot = Quaternion.LookRotation(offset);
			transform.rotation = Quaternion.Slerp(transform.rotation, lookRot, rotSpeed * Time.deltaTime);
		} else {
			ChangeDestNode();
		}
	}

	void ChangeDestNode(){
		currentNodeID++;
		if(currentNodeID >= path.nodes.Length){
			currentNodeID = 0;
		}
	}

	void OnDrawGizmos() {
		if (drawGizmos) {
			Gizmos.color = Color.red;
			Gizmos.DrawLine(transform.position, path.GetNodePos (currentNodeID));
		}
	}
}
