#pragma strict
var target : Transform;

//var target : Transform[];

//var podniesiony : Transform;
var distance : float;
//public var materials: Material[];
var offset : float = 1.3;
var grab : boolean;


function Start () {
	grab = false;
}

function Update () {
	//Debug.Log (grab);
	if (grab==true) 
		Grab ();
	//target = GameObject.FindWithTag("pustypunkt").transform;
	target = GameObject.FindWithTag("pustypunkt").transform;
	
	distance = Vector3.Distance (target.transform.position, transform.position);
	
	//jesli nie jest wcisniety klawisz E to podniesie
	if (!Input.GetKey(KeyCode.E)) {
		//if (!Input.GetKeyUp(KeyCode.E)) {
		if (distance < 1.5) {
			//Grab ();
			grab = true;
		}
		else {
			grab = false;
			}
	}
	
		
	
	else {
	//	Zniszcz();
		grab = false;
		}
	//przywroc tag beer
	//if (distance >= 1.5) {
	if (grab == false) {
		gameObject.tag = "beer";
	}
	//Find ();
	//if (!Input.GetKeyUp(KeyCode.E)) {
	
}

function Grab () {	
	
	transform.rotation = target.transform.rotation;
	transform.position.x = target.transform.position.x;
	transform.position.z = target.transform.position.z;
	//dodaj wysokosci	
	transform.position.y = target.transform.position.y + offset;
	//transform.tag = 'SomeTagName';
	
	gameObject.tag = "podniesiony";
}





 