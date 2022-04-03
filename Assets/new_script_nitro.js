#pragma strict
var kamera1 : Camera;
var kamera2 : Camera;
var kamera3 : Camera;
var wozek : GameObject;
var speed : float = 10;
var czasDzialania : float = 2.5f;
private var jestNitro : boolean;

function Update () {	
		Funkcja();
		if (jestNitro) {
			wozek.transform.Translate(Vector3.forward * Time.deltaTime * speed);	
		}
}
function Funkcja () {
		var otherScript2: MotionBlur = kamera1.GetComponent("MotionBlur"); 
		var otherScript3: MotionBlur = kamera2.GetComponent("MotionBlur"); 
		var otherScript4: MotionBlur = kamera3.GetComponent("MotionBlur"); 		
		
			otherScript2.enabled = true;
			otherScript3.enabled = true;
			otherScript4.enabled = true;			
			jestNitro = true;			
			yield WaitForSeconds (czasDzialania);
			jestNitro = false;
			wozek.GetComponent.<aktywacja>().nitro = false;
			wozek.GetComponent.<aktywacja>().powerup = false;
			otherScript2.enabled = false;
			otherScript3.enabled = false;
			otherScript4.enabled = false;
			gameObject.SetActive(false);
}