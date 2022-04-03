using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class new_script_nitro : MonoBehaviour {
	public Camera kamera1 ;
	public Camera kamera2  ;
	public Camera kamera3  ;
	public GameObject wozek  ;
	public float speed   = 10;
	public float czasDzialania   = 2.5f;
	private bool jestNitro ;

	
	
	// Update is called once per frame
	void Update () {
		Funkcja();
		if (jestNitro)
		{
			wozek.transform.Translate(Vector3.forward * Time.deltaTime * speed);
		}
	}
	void Funkcja()
	{
		StartCoroutine(ExampleCoroutine777());
		
	}
	private IEnumerator ExampleCoroutine777()
	{
		MotionBlur otherScript2 = kamera1.GetComponent<MotionBlur>();
		MotionBlur otherScript3 = kamera2.GetComponent<MotionBlur>();
		MotionBlur otherScript4 = kamera3.GetComponent<MotionBlur>();

		otherScript2.enabled = true;
		otherScript3.enabled = true;
		otherScript4.enabled = true;
		jestNitro = true;
		yield return new WaitForSeconds(czasDzialania);
		jestNitro = false;
		wozek.GetComponent< aktywacja > ().nitro = false;
		wozek.GetComponent< aktywacja > ().powerup = false;
		otherScript2.enabled = false;
		otherScript3.enabled = false;
		otherScript4.enabled = false;
		gameObject.SetActive(false);
	}
}
