#pragma strict

public var shield : GameObject;
var ogon : Transform;
public var mine: GameObject;
public var rocket : GameObject;
//var celownik : Transform;
public var bomb : GameObject;
var nitro2 : GameObject;
var wozek : GameObject;
public var mine_big: GameObject;
var ogon2 : Transform;
var powerup : boolean;
var bariera : boolean;
var rakieta : boolean;
var kula : boolean;
var mina : boolean;
var bomba : boolean;
var nitro : boolean;
var czasDzialania : float = 2.5f;
var predkosc : float = 0.5;
private var jestNitro : boolean;
var speed : float = 10;
var rakieta1 : GameObject;
var rakieta2 : GameObject;
var rakieta3 : GameObject;

function Update () {
		if (powerup) {    	     		
     		if (bariera)
     			BarieraEnemy();
     		if (rakieta)
     			RakietaEnemy();
     		if (kula)
     			KulaEnemy();
     		if (mina) 
     			MinaEnemy();
     		if (bomba)
     			BombaEnemy();
     		if (nitro)
     			NitroEnemy();
     	}
		if (jestNitro) {
			transform.Translate(Vector3.forward * Time.deltaTime * speed);	
		}
}
function BarieraEnemy () {
	shield.SetActive(true);
	yield WaitForSeconds (10);
	powerup = false;
	bariera = false;
}
function MinaEnemy () {
	 Instantiate(mine, ogon.transform.position, ogon.transform.rotation);
	 powerup = false;
	 mina = false;
}
function RakietaEnemy () {
	//Instantiate(rocket, celownik.transform.position, transform.rotation);
	rakieta1.GetComponent.<ruch_rakieta>().zmienna = true;
	rakieta2.GetComponent.<ruch_rakieta>().zmienna = true;
	rakieta3.GetComponent.<ruch_rakieta>().zmienna = true;
	powerup = false;
	rakieta = false;
}
function BombaEnemy () {
	Instantiate(bomb, ogon.transform.position, ogon.transform.rotation);
	powerup = false;
	bomba = false;
}
function KulaEnemy () {
	Instantiate(mine_big, ogon2.transform.position, ogon2.transform.rotation);
	powerup = false;
	kula = false;
}
function NitroEnemy () {
	if (wozek.GetComponent.<Rigidbody>().velocity.magnitude > predkosc) {			
			nitro2.SetActive (true);
			jestNitro = true;			
			yield WaitForSeconds (czasDzialania);
			jestNitro = false;
			powerup = false;
			nitro = false;
			nitro2.SetActive (false);				
		}			
}