#pragma strict

 var player : GameObject;
private var obcy : GameObject;
private var kobieta : GameObject;
private var jaskiniowiec : GameObject;

var liczba : float;
var obrazek01 : GameObject;
var obrazek02 : GameObject;
var obrazek03 : GameObject;
var obrazek04 : GameObject;
var obrazek05 : GameObject;
var obrazek06 : GameObject;
var shield : GameObject;
//var punkt_zrzutu : Transform;
//var pozycja : float;
//var punkty : Transform[];
//var polozenie1 : Vector3;
//var polozenie2 : Vector3;
//var polozenie3 : Vector3;
//var polozenie4 : Vector3;
//var polozenie5 : Vector3;
//var niebieski : boolean;
//var czerwony : boolean;
//var zielony : boolean;
//var bialy : boolean;

function Start () {
	player = GameObject.FindGameObjectWithTag("Player");
	obcy = GameObject.FindGameObjectWithTag("alien");
	kobieta = GameObject.FindGameObjectWithTag("woman");
	jaskiniowiec = GameObject.FindGameObjectWithTag("caveman");
	//obrazek01 = GameObject.Find("powerup_img");
	//obrazek02 = GameObject.Find("powerup_img 1");
	//obrazek03 = GameObject.Find("powerup_img 2");
	//obrazek04 = GameObject.Find("powerup_img 3");
	//obrazek05 = GameObject.Find("powerup_img 4");
	//obrazek06 = GameObject.Find("powerup_img 5");	
	liczba = Random.Range(1, 7);
}
function Respawnn () {
	GetComponent.<BoxCollider>().enabled = false;
	GetComponent.<Renderer>().enabled = false;
	GetComponent.<Rigidbody>().isKinematic = true;
	gameObject.transform.GetChild(0).GetComponent.<Renderer>().enabled = false;
	gameObject.transform.GetChild(1).GetComponent.<Renderer>().enabled = false;
	gameObject.transform.GetChild(2).GetComponent.<Renderer>().enabled = false;
	gameObject.transform.GetChild(3).GetComponent.<Renderer>().enabled = false;
	gameObject.transform.GetChild(4).GetComponent.<Renderer>().enabled = false;
	yield WaitForSeconds(5);
	GetComponent.<BoxCollider>().enabled = true;
	GetComponent.<Renderer>().enabled = true;
	GetComponent.<Rigidbody>().isKinematic = false;
	gameObject.transform.GetChild(0).GetComponent.<Renderer>().enabled = true;
	gameObject.transform.GetChild(1).GetComponent.<Renderer>().enabled = true;
	gameObject.transform.GetChild(2).GetComponent.<Renderer>().enabled = true;
	gameObject.transform.GetChild(3).GetComponent.<Renderer>().enabled = true;
	gameObject.transform.GetChild(4).GetComponent.<Renderer>().enabled = true;
}
//function Update () {
//	if (pozycja == 6) {
//		pozycja = 1;
//	}
//}
//function OnDrawGizmos () {
//			if (niebieski) {
//				Gizmos.color = Color.blue;
//			}
//			if (czerwony) {
//				Gizmos.color = Color.red;
//			}
//			if (zielony) {
//				Gizmos.color = Color.green;
//			}
//			if (bialy) {
//				Gizmos.color = Color.white;
//			}
//			Gizmos.DrawLine (polozenie1,polozenie2);
//			Gizmos.DrawLine (polozenie2,polozenie3);
//			Gizmos.DrawLine (polozenie3,polozenie4);
//			Gizmos.DrawLine (polozenie4,polozenie5);
//			Gizmos.DrawLine (polozenie5,polozenie1);
//}
function OnCollisionEnter(collision: Collision) {
	 		if (collision.gameObject.tag == "Player") {
	 			gameObject.GetComponent.<AudioSource>().Play();	 		
	 			player.GetComponent.<aktywacja>().powerup = true;
	 			if (liczba == 1) {
					player.GetComponent.<aktywacja>().bariera = true;
					player.GetComponent.<aktywacja>().rakieta = false;
					player.GetComponent.<aktywacja>().kula = false;
					player.GetComponent.<aktywacja>().mina = false;
					player.GetComponent.<aktywacja>().bomba = false;
					player.GetComponent.<aktywacja>().nitro = false;
					obrazek01.SetActive(true);
					obrazek02.SetActive(false);
					obrazek03.SetActive(false);
					obrazek04.SetActive(false);
					obrazek05.SetActive(false);
					obrazek06.SetActive(false);
				}
				if (liczba == 2) {					
					//ukryj bariere
					player.GetComponent.<aktywacja>().bariera = false;
					shield.SetActive(false);
					player.GetComponent.<aktywacja>().rakieta = true;
					player.GetComponent.<aktywacja>().kula = false;
					player.GetComponent.<aktywacja>().mina = false;
					player.GetComponent.<aktywacja>().bomba = false;
					player.GetComponent.<aktywacja>().nitro = false;				
					obrazek01.SetActive(false);
					obrazek02.SetActive(true);
					obrazek03.SetActive(false);
					obrazek04.SetActive(false);
					obrazek05.SetActive(false);
					obrazek06.SetActive(false);
				}
				if (liczba == 3) {
					//ukryj bariere
					player.GetComponent.<aktywacja>().bariera = false;
					shield.SetActive(false);
					player.GetComponent.<aktywacja>().rakieta = false;
					player.GetComponent.<aktywacja>().kula = true;
					player.GetComponent.<aktywacja>().mina = false;
					player.GetComponent.<aktywacja>().bomba = false;
					player.GetComponent.<aktywacja>().nitro = false;				
					obrazek01.SetActive(false);
					obrazek02.SetActive(false);
					obrazek03.SetActive(true);
					obrazek04.SetActive(false);
					obrazek05.SetActive(false);
					obrazek06.SetActive(false);
				}
				if (liczba == 4) {
					//ukryj bariere
					player.GetComponent.<aktywacja>().bariera = false;
					shield.SetActive(false);
					player.GetComponent.<aktywacja>().rakieta = false;
					player.GetComponent.<aktywacja>().kula = false;
					player.GetComponent.<aktywacja>().mina = true;
					player.GetComponent.<aktywacja>().bomba = false;
					player.GetComponent.<aktywacja>().nitro = false;
					obrazek01.SetActive(false);
					obrazek02.SetActive(false);
					obrazek03.SetActive(false);
					obrazek04.SetActive(true);
					obrazek05.SetActive(false);
					obrazek06.SetActive(false);
				}
				if (liczba == 5) {
					//ukryj bariere
					player.GetComponent.<aktywacja>().bariera = false;
					shield.SetActive(false);
					player.GetComponent.<aktywacja>().rakieta = false;
					player.GetComponent.<aktywacja>().kula = false;
					player.GetComponent.<aktywacja>().mina = false;
					player.GetComponent.<aktywacja>().bomba = true;
					player.GetComponent.<aktywacja>().nitro = false;
					obrazek01.SetActive(false);
					obrazek02.SetActive(false);
					obrazek03.SetActive(false);
					obrazek04.SetActive(false);
					obrazek05.SetActive(true);
					obrazek06.SetActive(false);
				}
				if (liczba == 6) {
					//ukryj bariere
					player.GetComponent.<aktywacja>().bariera = false;
					shield.SetActive(false);
					player.GetComponent.<aktywacja>().rakieta = false;
					player.GetComponent.<aktywacja>().kula = false;
					player.GetComponent.<aktywacja>().mina = false;
					player.GetComponent.<aktywacja>().bomba = false;
					player.GetComponent.<aktywacja>().nitro = true;					
					obrazek01.SetActive(false);					
					obrazek02.SetActive(false);
					obrazek03.SetActive(false);
					obrazek04.SetActive(false);
					obrazek05.SetActive(false);
					obrazek06.SetActive(true);
				}
				//Instantiate(gameObject, new Vector3(0, 50, -13), transform.rotation);
				//Destroy (gameObject);
				//transform.position = new Vector3(0, 50, -13);
				//transform.position = punkt_zrzutu.transform.position;
//				if (pozycja == 5) {
//					//transform.position = punkty[0].transform.position;
//					//pozycja++;
//					transform.position = polozenie1;
//				}
//				if (pozycja == 1) {
//					//transform.position = punkty[1].transform.position;
//					//pozycja++;
//					transform.position = polozenie2;
//				}
//				if (pozycja == 2) {
//					//transform.position = punkty[2].transform.position;
//					//pozycja++;
//					transform.position = polozenie3;
//				}
//				if (pozycja == 3) {
//					//transform.position = punkty[3].transform.position;
//					//pozycja++;
//					transform.position = polozenie4;
//				}
//				if (pozycja == 4) {
//					//transform.position = punkty[4].transform.position;
//					//pozycja++;
//					transform.position = polozenie5;
//				}
				
				liczba = Random.Range(1, 7);
				
				Respawnn();
//				pozycja++;			
			}
			if (collision.gameObject.tag == "alien") {				
				obcy.GetComponent.<aktywacja_enemy>().powerup = true;
				if (liczba == 1) {
					obcy.GetComponent.<aktywacja_enemy>().bariera = true;					
				}
				if (liczba == 2) {
					obcy.GetComponent.<aktywacja_enemy>().rakieta = true;					
				}
				if (liczba == 3) {
					obcy.GetComponent.<aktywacja_enemy>().kula = true;					
				}
				if (liczba == 4) {
					obcy.GetComponent.<aktywacja_enemy>().mina = true;					
				}
				if (liczba == 5) {
					obcy.GetComponent.<aktywacja_enemy>().bomba = true;					
				}
				if (liczba == 6) {
					obcy.GetComponent.<aktywacja_enemy>().nitro = true;					
				}
				//Instantiate(gameObject, new Vector3(0, 50, -13), transform.rotation);
				//Destroy (gameObject);
				//transform.position = new Vector3(0, 50, -13);
				//transform.position = punkt_zrzutu.transform.position;
//				if (pozycja == 5) {
//					//transform.position = punkty[0].transform.position;
//					//transform.position = new Vector3(punkty[0].transform.position.x, transform.position.y, punkty[0].transform.position.z);
//					transform.position = polozenie1;
//					//pozycja++;
//				}
//				if (pozycja == 1) {
//					//transform.position = punkty[1].transform.position;
//					//transform.position = new Vector3(punkty[1].transform.position.x, transform.position.y, punkty[1].transform.position.z);
//					transform.position = polozenie2;
//					//pozycja++;
//				}
//				if (pozycja == 2) {
//					//transform.position = punkty[2].transform.position;
//					//transform.position = new Vector3(punkty[2].transform.position.x, transform.position.y, punkty[2].transform.position.z);
//					transform.position = polozenie3;
//					//pozycja++;
//				}
//				if (pozycja == 3) {
//					//transform.position = punkty[3].transform.position;
//					transform.position = polozenie4;
//					//transform.position = new Vector3(punkty[3].transform.position.x, transform.position.y, punkty[3].transform.position.z);
//					//pozycja++;
//				}
//				if (pozycja == 4) {
//					//transform.position = punkty[4].transform.position;
//					//pozycja++;
//					transform.position = polozenie5;
//				}
				
				liczba = Random.Range(1, 7);
				Respawnn();
//				pozycja++;
							}
			if (collision.gameObject.tag == "woman") {
				
				kobieta.GetComponent.<aktywacja_enemy>().powerup = true;
				if (liczba == 1) {
					kobieta.GetComponent.<aktywacja_enemy>().bariera = true;					
				}
				if (liczba == 2) {
					kobieta.GetComponent.<aktywacja_enemy>().rakieta = true;					
				}
				if (liczba == 3) {
					kobieta.GetComponent.<aktywacja_enemy>().kula = true;					
				}
				if (liczba == 4) {
					kobieta.GetComponent.<aktywacja_enemy>().mina = true;					
				}
				if (liczba == 5) {
					kobieta.GetComponent.<aktywacja_enemy>().bomba = true;					
				}
				if (liczba == 6) {
					kobieta.GetComponent.<aktywacja_enemy>().nitro = true;					
				}
				//Instantiate(gameObject, new Vector3(0, 50, -13), transform.rotation);
				//Destroy (gameObject);
				//transform.position = new Vector3(0, 50, -13);
				//transform.position = punkt_zrzutu.transform.position;
//				if (pozycja == 5) {
//					//transform.position = punkty[0].transform.position;
//					//transform.position = new Vector3(punkty[0].transform.position.x, transform.position.y, punkty[0].transform.position.z);
//					transform.position = polozenie1;
//					//pozycja++;
//				}
//				if (pozycja == 1) {
//					//transform.position = punkty[1].transform.position;
//					//transform.position = new Vector3(punkty[1].transform.position.x, transform.position.y, punkty[1].transform.position.z);
//					transform.position = polozenie2;
//					//pozycja++;
//				}
//				if (pozycja == 2) {
//					//transform.position = punkty[2].transform.position;
//					//transform.position = new Vector3(punkty[2].transform.position.x, transform.position.y, punkty[2].transform.position.z);
//					transform.position = polozenie3;
//					//pozycja++;
//				}
//				if (pozycja == 3) {
//					//transform.position = punkty[3].transform.position;
//					transform.position = polozenie4;
//					//transform.position = new Vector3(punkty[3].transform.position.x, transform.position.y, punkty[3].transform.position.z);
//					//pozycja++;
//				}
//				if (pozycja == 4) {
//					//transform.position = punkty[4].transform.position;
//					//pozycja++;
//					transform.position = polozenie5;
//				}
				
				liczba = Random.Range(1, 7);
				Respawnn();
//				pozycja++;
				
			}
			if (collision.gameObject.tag == "caveman") {
				
				jaskiniowiec.GetComponent.<aktywacja_enemy>().powerup = true;
				if (liczba == 1) {
					jaskiniowiec.GetComponent.<aktywacja_enemy>().bariera = true;					
				}
				if (liczba == 2) {
					jaskiniowiec.GetComponent.<aktywacja_enemy>().rakieta = true;					
				}
				if (liczba == 3) {
					jaskiniowiec.GetComponent.<aktywacja_enemy>().kula = true;					
				}
				if (liczba == 4) {
					jaskiniowiec.GetComponent.<aktywacja_enemy>().mina = true;					
				}
				if (liczba == 5) {
					jaskiniowiec.GetComponent.<aktywacja_enemy>().bomba = true;					
				}
				if (liczba == 6) {
					jaskiniowiec.GetComponent.<aktywacja_enemy>().nitro = true;					
				}
				//Instantiate(gameObject, new Vector3(0, 50, -13), transform.rotation);
				//Destroy (gameObject);
				//transform.position = new Vector3(0, 50, -13);
				//transform.position = punkt_zrzutu.transform.position;
//				if (pozycja == 5) {
//					//transform.position = punkty[0].transform.position;
//					//transform.position = new Vector3(punkty[0].transform.position.x, transform.position.y, punkty[0].transform.position.z);
//					transform.position = polozenie1;
//					//pozycja++;
//				}
//				if (pozycja == 1) {
//					//transform.position = punkty[1].transform.position;
//					//transform.position = new Vector3(punkty[1].transform.position.x, transform.position.y, punkty[1].transform.position.z);
//					transform.position = polozenie2;
//					//pozycja++;
//				}
//				if (pozycja == 2) {
//					//transform.position = punkty[2].transform.position;
//					//transform.position = new Vector3(punkty[2].transform.position.x, transform.position.y, punkty[2].transform.position.z);
//					transform.position = polozenie3;
//					//pozycja++;
//				}
//				if (pozycja == 3) {
//					//transform.position = punkty[3].transform.position;
//					transform.position = polozenie4;
//					//transform.position = new Vector3(punkty[3].transform.position.x, transform.position.y, punkty[3].transform.position.z);
//					//pozycja++;
//				}
//				if (pozycja == 4) {
//					//transform.position = punkty[4].transform.position;
//					//pozycja++;
//					transform.position = polozenie5;
//				}
				
				liczba = Random.Range(1, 7);
				Respawnn();
//				pozycja++;
				
			}
}