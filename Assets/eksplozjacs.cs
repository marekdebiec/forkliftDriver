using UnityEngine;
using System.Collections;

public class eksplozjacs : MonoBehaviour {

	public GameObject gracz;

	void Start () {
		gracz = GameObject.FindGameObjectWithTag("Player");
	}
	void OnCollisionEnter(Collision collision) {
		if (collision.gameObject.tag == "Player") {
			Explode();
			
			

			//	collision.gameObject.GetComponent<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;;
		//	gracz.GetComponent<CarUserControl>().enabled = false;
			//yield return new WaitForSeconds(5);
			//gracz.GetComponent<CarUserControl>().enabled = true;
			//	collision.gameObject.GetComponent<Rigidbody>().constraints = RigidbodyConstraints.None;
		}
		if (collision.gameObject.tag == "alien") {
			Explode();
			//collision.gameObject.GetComponent.<CarAIControl>().driving = true
			
		}

	}
	void Explode () {
		var exp = GetComponent<ParticleSystem>();
		exp.Play();
		//gracz.GetComponent<CarUserControl>().enabled = true;
		Destroy(gameObject, exp.duration);
	}
}
