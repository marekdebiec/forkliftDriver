#pragma strict
public var prefab: Transform;
private var materials : Material[];
var czerwonyMaterial : Material;
var niebieskiMaterial : Material;
var zielonyMaterial : Material;
var zmienna : float;

function Start () {
	//zmienna = Random.value;
	zmienna = Random.Range(0,3.9);
	var zmiennaZaokraglona = Mathf.Round(zmienna);
	
	var clone : Transform;
	
	clone = Instantiate(prefab, transform.position, Quaternion.identity);
	//clone.transform.position.z = -1.18006;
	if (zmiennaZaokraglona <= 1) {
		clone.GetComponent.<Renderer>().material = czerwonyMaterial;
	}
	if (zmiennaZaokraglona > 1 && zmiennaZaokraglona <= 2) {
		clone.GetComponent.<Renderer>().material = zielonyMaterial;
	}
	else if (zmiennaZaokraglona > 2) {
		clone.GetComponent.<Renderer>().material = niebieskiMaterial;
	}
}

function OnTriggerExit (other : Collider) {
	if ( other.gameObject.tag == "podniesiony") {	
			Tworzenie();	
	}	
}
function Tworzenie() {
			yield WaitForSeconds(3);
			//var zmienna = Random.value;
			zmienna = Random.Range(0,3.9);
			var zmiennaZaokraglona = Mathf.Round(zmienna);
			var clone : Transform;
			clone = Instantiate(prefab, transform.position, Quaternion.identity);
			//clone.transform.position.z = -1.18006;
//				if (zmiennaZaokraglona == 0) {
//					clone.GetComponent.<Renderer>().material = czerwonyMaterial;
//				}
//				else if (zmiennaZaokraglona == 1) {
//					clone.GetComponent.<Renderer>().material = niebieskiMaterial;
//				}
				if (zmiennaZaokraglona <= 1) {
					clone.GetComponent.<Renderer>().material = czerwonyMaterial;
				}
				if (zmiennaZaokraglona > 1 && zmiennaZaokraglona <= 2) {
					clone.GetComponent.<Renderer>().material = zielonyMaterial;
				}
				else if (zmiennaZaokraglona > 2) {
					clone.GetComponent.<Renderer>().material = niebieskiMaterial;
				}
}