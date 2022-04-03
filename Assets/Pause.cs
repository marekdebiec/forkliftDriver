using UnityEngine;
using System.Collections;
using UnityEngine.UI;


public class Pause : MonoBehaviour {
	
	bool zmienna;
	
	//public GameObject wiadomosc ;
	public Text pauseText;
	public GameObject wyjdz;
	public GameObject wznow;
	private GameObject muzyka;

	void Awake() {
		muzyka = GameObject.Find("music");
	}
	// Update is called once per frame
	void Update () {
		//if (Input.GetButtonDown("Fire1")) {
		if (Input.GetKeyDown(KeyCode.Escape)) {
			if (zmienna == false) {
				wyjdz.SetActive (true);
				wznow.SetActive (true);
				//if (Input.GetKeyDown (KeyCode.T)) {
				Camera.main.GetComponent<BlurEffect>().enabled = true;
				Time.timeScale = 0.0F;
				//wiadomosc.SetActive (true);
				pauseText.text = ("Pauza");
				muzyka.GetComponent<AudioSource>().Stop();
				zmienna = true;
			}
			else if (zmienna == true) {
				wyjdz.SetActive (false);
				wznow.SetActive (false);
				Camera.main.GetComponent<BlurEffect>().enabled = false;
				Time.timeScale = 1.0F;
				//wiadomosc.SetActive (false);
				pauseText.text = ("");
				muzyka.GetComponent<AudioSource>().Play();
				zmienna = false;
			}
		} 
		//else
		//Time.timeScale = 1.0F;
		//Time.fixedDeltaTime = 0.02F * Time.timeScale;
		
	}
}
