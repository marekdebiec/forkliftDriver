using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class przycisk : MonoBehaviour {

	public GameObject wozek;

	public void Przyspiesz (int gaz)
	{
		wozek.transform.Translate (0, 0, 1 * Time.deltaTime * 5.0f);
	}
	public void Przyspiesz2 ()
	{
		wozek.transform.Translate (0, 0, 1 * Time.deltaTime * 5.0f);
	}
}
