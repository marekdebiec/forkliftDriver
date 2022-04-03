// script by @effendiilham

using UnityEngine;
using System.Collections;

public class Path : MonoBehaviour {

	public Transform[] nodes;

	public Vector3 GetNodePos(int id){
		return nodes[id].position;
	}
}
