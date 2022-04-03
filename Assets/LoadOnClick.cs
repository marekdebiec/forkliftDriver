using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class LoadOnClick : MonoBehaviour {

//public GameObject loadingImage;
	public Text pauseText;
	public GameObject wyjdz;
	public GameObject wznow;
	public GameObject muzyka;

public void LoadScene(int level)
	{
		//loadingImage.SetActive(true);
		Application.LoadLevel(level);
	}
public void Wznow()
	{
		Time.timeScale = 1.0F;
		pauseText.text = ("");
		wyjdz.SetActive (false);
		wznow.SetActive (false);
		muzyka.GetComponent<AudioSource>().Play();
		Camera.main.GetComponent<BlurEffect>().enabled = false;
	}
}
