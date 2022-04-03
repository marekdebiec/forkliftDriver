using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class fade : MonoBehaviour {
	//var text2 : UI.Image;
		public Image text2; 
	//var speed : float = 0.01f;
		public float speed = 0.01f;
		private Color temp;
		
	// Use this for initialization
	void Start () {
		temp = text2.color;
		temp.a = 0.0f;
		//text2.color.a = 0.0f;
	}
	
	// Update is called once per frame
	void Update () {
		temp.a += speed;
		//text2.color.a += speed;
		text2.color = temp;
	}
}
