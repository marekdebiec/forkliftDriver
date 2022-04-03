using UnityEngine;
using System.Collections;

public class rotateSkybox : MonoBehaviour {

	public float rot = 0;
	public Skybox sky;

	void Start() {
		sky = GetComponent<Skybox> ();
	}
	void Update () {
		rot += 2 * Time.deltaTime;
		rot %= 360;
		sky.material.SetFloat ("_Rotation", rot);
	}
}
