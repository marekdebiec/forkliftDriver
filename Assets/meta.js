#pragma strict

//var inne : GameObject;
//var alien : float = 0;
//var woman : float = 0;
//var metaText : UI.Text;
//
//function Awake () {
//	inne = GameObject.Find("audio_listener");
//}
//function OnTriggerEnter (other : Collider) {
//		if (other.gameObject.tag == "alien" ){
//			alien++;
//			if (alien==3) {
//				Debug.Log("<color=red>1st place Alien!</color>");
//				metaText.text = ("1st place Alien!");
//				GetComponent.<AudioSource>().Play();
//				GetComponent.<meta_cd>().enabled = true;
//				GetComponent.<meta_cd>().zmienna1 = true;
//				GetComponent.<meta_cd>().miejsce1 = other.gameObject;
//				Destroy(this);
//			}
//		}
//		if( other.gameObject.transform.parent != null ) {
//			if (other.gameObject.transform.parent.tag == "Player" ){
//				if (inne.GetComponent.<time_racing>().lap > 3) {
//					Debug.Log("<color=green>1st place Player!</color>");
//					metaText.text = ("1st place Player!");
//					GetComponent.<AudioSource>().Play();
//					GetComponent.<meta_cd>().enabled = true;
//					GetComponent.<meta_cd>().zmienna2 = true;
//					GetComponent.<meta_cd>().miejsce1 = other.gameObject;
//					Destroy(this);
//					}
//				}
//			}
//		
//		if (other.gameObject.tag == "woman" ){
//			woman++;
//			if (woman==3) {
//				Debug.Log("<color=blue>1st place woman!</color>");
//				metaText.text = ("1st place woman!");
//				GetComponent.<AudioSource>().Play();
//				GetComponent.<meta_cd>().enabled = true;
//				GetComponent.<meta_cd>().zmienna3 = true;
//				GetComponent.<meta_cd>().miejsce1 = other.gameObject;
//				Destroy(this);
//			}
//			}
//		
//	}