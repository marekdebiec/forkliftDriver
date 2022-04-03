using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Timer2 : MonoBehaviour {
	public float timer   = 0.0f;
	public GUIStyle customButton  ;
	//var pauseText : UI.Text;
	float a  ;
	float b ;
	float c ;

	// Use this for initialization
	void Start () {
		a = 1;
		b = 1;
		c = 0;
	}
	
	// Update is called once per frame
	void Update () {
		timer += Time.deltaTime;


		if (timer == 0)
		{
			b = 1;
		}
		b -= 0.001f;
		customButton.normal.textColor = new Color(a, b, c);
		//	if(timer >= 0 )
		//	{
		//		customButton.normal.textColor = Color.yellow;
		//	}
		//	if(timer >= 10 )
		//	{
		//		customButton.normal.textColor = new Color(1, 0.5, 0); //orange
		//	}
		//	if(timer >= 15 )
		//	{
		//		customButton.normal.textColor = Color.red;
		//	}
		//	if(timer >= 20 )
		//	{
		//		customButton.normal.textColor = new Color(0.5, 0, 0); //ciemny czerwony
		//	}
	}
	void OnGUI()
	{
		GUI.Box(new Rect(10, 10, 50, 20), "" + timer.ToString("0"), customButton);
	}
}
