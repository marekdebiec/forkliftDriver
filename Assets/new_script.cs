using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class new_script : MonoBehaviour {
	public GUIStyle customButton2  ;
	
	
	void OnGUI()
	{

		GUI.Box(new Rect(Screen.width - 175, 50, 50, 20), "Lap:", customButton2);


	}
}
