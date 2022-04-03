using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class skyboxRotate : MonoBehaviour {

	//var sky : Material;
	 //var rot : float = 90.0f;
		public Material sky;
	public float rot = 90.0f;
	// Use this for initialization
	void Start () {
		sky = RenderSettings.skybox;
	}
	
	// Update is called once per frame
	void Update () {
		rot += 2 * Time.deltaTime;
		sky.SetFloat("_Rotation", rot);
	}
}
