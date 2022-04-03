using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class time_racing : MonoBehaviour {
	 
	public bool zmienna;
	
	float timer;
	float minutes;
	float seconds;
	public GUIStyle customButton2 ;

	// Use this for initialization
	void Start () {
		timer = 0.0f;
		Opoznienie();
	}
	
	// Update is called once per frame
	void Update () {
		if (zmienna)
		{
			timer += Time.deltaTime;
			minutes = Mathf.Floor(timer / 60);
			seconds = Mathf.RoundToInt(timer % 60);
		}
	}
	void Opoznienie()
    {
		StartCoroutine(ExampleCoroutine3333());
		
	}
	private IEnumerator ExampleCoroutine3333()
	{
		yield return new WaitForSeconds(5);
		zmienna = true;
	}
	public void OnGUI()
	{
		if (seconds < 10)
		{
			GUI.Box(new Rect(Screen.width - 175, 10, 50, 20), "Time: " + minutes + ":" + "0" + seconds, customButton2);
		}
		else
		{
			GUI.Box(new Rect(Screen.width - 175, 10, 50, 20), "Time: " + minutes + ":" + seconds, customButton2);
		}
		//GUI.Box(new Rect(Screen.width - 175, 50, 60, 30), "Lap: " + lap.ToString() + "/3",  customButton2);	
	}
}
