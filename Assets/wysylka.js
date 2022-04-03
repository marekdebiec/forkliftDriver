#pragma strict

//var CzyJestPelny : boolean;
//var Strefa :  GameObject;
var Strefy :  GameObject[];
var audiolistener : GameObject;
//private var TworZ2 :  tworz2;
function Awake () {
	audiolistener = GameObject.Find("audio_listener");
}
//function Awake () {
	// TworZ2 = Strefa.GetComponent(tworz2);

//	var gos1 : GameObject[];
//	gos1 = GameObject.FindGameObjectsWithTag("beer");
//	podniesiony = GameObject.FindWithTag("podniesiony").transform;
//	for (var go in gos1) {				
//				var hit : RaycastHit;
//				var direction : Vector3;			
//				if (go.GetComponent.<Renderer>().material.name == podniesiony.GetComponent.<Renderer>().material.name) {
//					if(Physics.Raycast(podniesiony.transform.position, Vector3.forward, hit)){
//						var dist = Vector3.Distance(podniesiony.transform.position, hit.transform.position);
//						if(dist < 5.0) {
//								Destroy (podniesiony);
//								}
//							}
//				}
//			}
//}


//function OnTriggerStay (other : Collider) {
//	if (other.tag == "beer") 
//		CzyJestPelny = true;
//}
function OnTriggerEnter (other : Collider) {
			if (other.tag == "podniesiony") {
	//	if (CzyJestPelny) {
		//if (Strefa.GetComponent(tworz2).czyJestPusty) {
			 	//Strefy[0].GetComponent(tworz2).Tworzenie();
			 	//Strefy[1].GetComponent(tworz2).Tworzenie();
			 	//Strefy[2].GetComponent(tworz2).Tworzenie();
				for (var go in Strefy) {	
					
					go.GetComponent(tworz2).Tworzenie();
					
				}
				//other.transform.position = transform.position;
				//other.GetComponent.<Rigidbody>().isKinematic = true;
		//	CzyJestPelny = false;
		//}
	//}	
		
		
		
		
	//	audiolistener.GetComponent(score).score = audiolistener.GetComponent(score).score + (100 / audiolistener.GetComponent(Timer2).timer);
	audiolistener.GetComponent(score).score = audiolistener.GetComponent(score).score + (100 / 20);
		audiolistener.GetComponent(Timer2).timer = 0; //zresetuj czasomierz
		audiolistener.GetComponent(Timer2).enabled = false; //wylacz odliczanie czasu
	}
}
function OnTriggerStay (other : Collider) {
	if (other.tag == "beer") {
		Destroy (other.GetComponent (Grab2));
		other.GetComponent(Rigidbody).isKinematic = true;
		other.transform.position = transform.position;
			if (gameObject.name == "Wysylka1") {
				GetComponentInParent(odjazd).jeden = true;
			}
			//else {GetComponentInParent(odjazd).jeden = false;}
			if (gameObject.name == "Wysylka2") {
				GetComponentInParent(odjazd).dwa = true;
			}
			//else {GetComponentInParent(odjazd).dwa = false;}
			if (gameObject.name == "Wysylka3") {
				GetComponentInParent(odjazd).trzy = true;
			}
			//else {GetComponentInParent(odjazd).trzy = false;}
			
			//switch (zmienna) {
			//case wartosc1;
			//kod wykonywany gdy zmienna=wartosc1
			//break;  
		
		}
}
function OnTriggerExit (other:Collider) {
	if (gameObject.name == "Wysylka1") {
				GetComponentInParent(odjazd).jeden = false;
			}
	if (gameObject.name == "Wysylka2") {
				GetComponentInParent(odjazd).dwa = false;
			}
	if (gameObject.name == "Wysylka3") {
				GetComponentInParent(odjazd).trzy = false;
			}
}