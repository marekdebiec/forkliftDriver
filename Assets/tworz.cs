using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class tworz : MonoBehaviour {
	//	public var prefab: Transform;
	//private var materials : Material[];
	//var czerwonyMaterial : Material;
	//var niebieskiMaterial : Material;
	//var zielonyMaterial : Material;
	//var zmienna : float;

	public Transform prefab;
	private Material[] materials;
	public Material czerwonyMaterial;
	public Material niebieskiMaterial;
	public Material zielonyMaterial;
	public float zmienna;

	// Use this for initialization
	void Start () {
		//zmienna = Random.value;
		zmienna = Random.Range(0, 3.9f);
		var zmiennaZaokraglona = Mathf.Round(zmienna);

		Transform clone;

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
	
	
	void OnTriggerExit(Collider other)
	{
		if (other.gameObject.tag == "podniesiony")
		{
			StartCoroutine(ExampleCoroutine777());
		}
	}
	
	private IEnumerator ExampleCoroutine777()
    {
		yield return new WaitForSeconds(3);
		//var zmienna = Random.value;
		zmienna = Random.Range(0, 3.9f);
		var zmiennaZaokraglona = Mathf.Round(zmienna);
		Transform clone;
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
	}
}
