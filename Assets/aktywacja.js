#pragma strict

public var mine: GameObject;
public var mine_big: GameObject;
public var bomb : GameObject;
public var shield : GameObject;
public var rocket : GameObject;
//var mine_polozona : GameObject;
var ogon : Transform;
var ogon2 : Transform;
var powerup : boolean;
var bariera : boolean;
var rakieta : boolean;
var kula : boolean;
var mina : boolean;
var bomba : boolean;
var nitro : boolean;
var nitro2 : GameObject;
var wozek : GameObject;
//var kamera1 : Camera;
//var kamera2 : Camera;
//var kamera3 : Camera;
var predkosc : float = 0.5;
var canvas : GameObject;
var obrazek01 : GameObject;
var obrazek02 : GameObject;
var obrazek03 : GameObject;
var obrazek04 : GameObject;
var obrazek05 : GameObject;
var obrazek06 : GameObject;

var rakieta1 : GameObject;
var rakieta2 : GameObject;
var rakieta3 : GameObject;

function Start () {
		wozek = gameObject;
		canvas = GameObject.Find("Canvas");	  	
		obrazek01 = canvas.transform.GetChild(13).gameObject;
   		obrazek02 = canvas.transform.GetChild(12).gameObject;
        obrazek03 = canvas.transform.GetChild(11).gameObject;
        obrazek04 = canvas.transform.GetChild(10).gameObject;
        obrazek05 = canvas.transform.GetChild(9).gameObject;
        obrazek06 = canvas.transform.GetChild(8).gameObject;
}
function Update () {	
  if (Input.GetKeyUp(KeyCode.Z) || Input.GetKeyUp(KeyCode.JoystickButton0) )  {
    	//1 na joysticku    	
    	if (powerup) {
    	//mine_polozona = GameObject.Find("mine(Clone)");
    	//mine_polozona.transform.eulerAngles.x = -90;
     		//Quaternion.identity 		
     		if (bariera) {
     			Bariera();
     		}
     		if (rakieta) {
     			Rakieta();
     		}
     		if (kula) {
     			Kula();
     		}
     		if (mina) {
     			Mina();
     		}
     		if (bomba) {
     			Bomba();
     		}
     		if (nitro) {
     			Nitro();
     		}
     	}
     }
//      if (Input.GetKeyUp(KeyCode.JoystickButton1)){
// 		//2 na joysticku
// 		
// 			
//     	
//     }
// if (Input.GetKeyUp(KeyCode.C) || Input.GetKeyUp(KeyCode.JoystickButton2)){
// 		//3 na joysticku
// 
//     	
//     }
// if (Input.GetKeyUp(KeyCode.E) || Input.GetKeyUp(KeyCode.JoystickButton4)){
// 	//1L na joysticku
// 	
//	 		
//	  }
//  if (Input.GetKeyUp(KeyCode.Q) || Input.GetKeyUp(KeyCode.JoystickButton5)){
//  	//1R na joysticku
//  	
//	  		
//	  }
}
function Bariera () {
		shield.SetActive(true);
		shield.GetComponent.<AudioSource>().Play();	
		obrazek01.SetActive (false);
		obrazek02.SetActive (false);
		obrazek03.SetActive (false);
		obrazek04.SetActive (false);
		obrazek05.SetActive (false);
		obrazek06.SetActive (false);
	//yield WaitForSeconds (10);
	//powerup = false;
	//bariera = false;	
}
function Mina () {
	 	Instantiate(mine, ogon.transform.position, ogon.transform.rotation);
	 	powerup = false;
	 	mina = false;
	 	obrazek01.SetActive (false);
		obrazek02.SetActive (false);
		obrazek03.SetActive (false);
		obrazek04.SetActive (false);
		obrazek05.SetActive (false);
		obrazek06.SetActive (false);	 
}
function Rakieta () {
		//3 sztuki
		//for(var i : int = 0; i < 3; i++)
    	//{
			//Instantiate(rocket, celownik.transform.position, transform.rotation);
		//}
		rakieta1.GetComponent.<ruch_rakieta>().zmienna = true;
		rakieta1.GetComponent.<AudioSource>().enabled = true;
		rakieta2.GetComponent.<ruch_rakieta>().zmienna = true;
		rakieta2.GetComponent.<AudioSource>().enabled = true;
		rakieta3.GetComponent.<ruch_rakieta>().zmienna = true;
		rakieta3.GetComponent.<AudioSource>().enabled = true;
		powerup = false;
		rakieta = false;	
		obrazek01.SetActive (false);
		obrazek02.SetActive (false);
		obrazek03.SetActive (false);
		obrazek04.SetActive (false);
		obrazek05.SetActive (false);
		obrazek06.SetActive (false);
}
function Bomba () {
		Instantiate(bomb, ogon.transform.position, ogon.transform.rotation);
		powerup = false;
		bomba = false;	
		obrazek01.SetActive (false);
		obrazek02.SetActive (false);
		obrazek03.SetActive (false);
		obrazek04.SetActive (false);
		obrazek05.SetActive (false);
		obrazek06.SetActive (false);
}
function Kula () {
		Instantiate(mine_big, ogon2.transform.position, ogon2.transform.rotation);
		powerup = false;
		kula = false;
		obrazek01.SetActive (false);
		obrazek02.SetActive (false);
		obrazek03.SetActive (false);
		obrazek04.SetActive (false);
		obrazek05.SetActive (false);
		obrazek06.SetActive (false);	
}
function Nitro () {
	//var otherScript2: MotionBlur = kamera1.GetComponent("MotionBlur"); 
	//var otherScript3: MotionBlur = kamera2.GetComponent("MotionBlur"); 
	//var otherScript4: MotionBlur = kamera3.GetComponent("MotionBlur");	
	if (wozek.GetComponent.<Rigidbody>().velocity.magnitude > predkosc) {			
			nitro2.SetActive (true);			
		//	otherScript2.enabled = true;
		//	otherScript3.enabled = true;
		//	otherScript4.enabled = true;			
			obrazek01.SetActive (false);
			obrazek02.SetActive (false);
			obrazek03.SetActive (false);
			obrazek04.SetActive (false);
			obrazek05.SetActive (false);
			obrazek06.SetActive (false);
			//yield WaitForSeconds (5);
		//	powerup = false;
		//	nitro = false;
			//nitro2.SetActive (false);			
			//otherScript2.enabled = false;
			//otherScript3.enabled = false;
			//otherScript4.enabled = false;		
		}			
}