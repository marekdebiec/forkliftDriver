using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class tworz2 : MonoBehaviour {

	public Transform prefab;
	private Material[] materials  ;
	Material czerwonyMaterial  ;
	Material niebieskiMaterial  ;
	Material zielonyMaterial ;
	public float zmienna  ;
	bool  czyJestPusty ;

	// Use this for initialization
	void Start () {
		//zmienna = Random.value;
		zmienna = Random.Range(0.0f, 3.9f);
		var zmiennaZaokraglona = Mathf.Round(zmienna);

		Transform clone  ;

		clone = Instantiate(prefab, transform.position, Quaternion.identity);
		//clone.transform.position.z = -1.18006;
		if (zmiennaZaokraglona <= 1)
		{
			clone.GetComponent< Renderer > ().material = czerwonyMaterial;
		}
		if (zmiennaZaokraglona > 1 && zmiennaZaokraglona <= 2)
		{
			clone.GetComponent< Renderer > ().material = zielonyMaterial;
		}
		else if (zmiennaZaokraglona > 2)
		{
			clone.GetComponent< Renderer > ().material = niebieskiMaterial;
		}
	}
	void OnTriggerStay(Collider other  )
	{
		if (other.tag == "beer")
			czyJestPusty = false;
	}
	void OnTriggerExit(Collider other )
	{
		if (other.tag == "podniesiony")
			czyJestPusty = true;
	}
	
	public void Tworzenie ()
    {
		if (czyJestPusty)
		{
			//yield WaitForSeconds(3);
			//var zmienna = Random.value;
			zmienna = Random.Range(0.0f, 3.9f);
			var zmiennaZaokraglona = Mathf.Round(zmienna);
			Transform clone  ;
			clone = Instantiate(prefab, transform.position, Quaternion.identity);
			//clone.transform.position.z = -1.18006;
			//				if (zmiennaZaokraglona == 0) {
			//					clone.GetComponent.<Renderer>().material = czerwonyMaterial;
			//				}
			//				else if (zmiennaZaokraglona == 1) {
			//					clone.GetComponent.<Renderer>().material = niebieskiMaterial;
			//				}
			if (zmiennaZaokraglona <= 1)
			{
				clone.GetComponent< Renderer > ().material = czerwonyMaterial;
			}
			if (zmiennaZaokraglona > 1 && zmiennaZaokraglona <= 2)
			{
				clone.GetComponent< Renderer > ().material = zielonyMaterial;
			}
			else if (zmiennaZaokraglona > 2)
			{
				clone.GetComponent< Renderer > ().material = niebieskiMaterial;
			}
			czyJestPusty = false;
		}
	}
}
