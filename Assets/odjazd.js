#pragma strict

var czyJedzie : boolean;
var wheels : GameObject[];
var najdalszyPunkt : Vector3;
var blizszyPunkt : Vector3;
var najblizszyPunkt : Vector3;
var animator : Animator;
var przekroczyl : boolean;
public var prefab: GameObject;
var pelny : boolean;
public var start : boolean;
public var jeden : boolean;
public var dwa : boolean;
public var trzy : boolean;
var ciezarowki : GameObject[];

function Awake () {
	animator = GetComponent(Animator);	
}
function Start () {
	czyJedzie = false;
	start = false;
	pelny = false;
	przekroczyl = false;
	jeden = false;
	dwa = false;
	trzy = false;
	//animator.SetBool ("otworz", false);
}
function Update () {
	ciezarowki = GameObject.FindGameObjectsWithTag("truck");
	if (czyJedzie) {
			for(var i : int = 0; i < wheels.Length; i++) {
				wheels[i].transform.Rotate(-Vector3.right * Time.deltaTime * 200);
				}
		}
	if (start) {
		Ruszaj1();
		czyJedzie = true;
		}
	//if (czyJedzie) {
		//Ruszaj2 ();		
	//}
	if (transform.position == blizszyPunkt) {
			//czyJedzie = false;
			animator.SetBool ("otworz", true);
			przekroczyl = true;
			czyJedzie = false;
			//animation.Stop("otworzDrzwi");
			}
	if (transform.position.x < -116) {
		//transform.position.x = 55;
		Instantiate(prefab, najblizszyPunkt, Quaternion.Euler(0, 90, 0));
		
		Destroy (gameObject);
		
	}
	//jedzie dalej jesli pelny
	if (jeden && dwa && trzy) {
		pelny = true;
	}
	else {
		pelny = false;
	}
}
function Ruszaj1 () {
		if (!przekroczyl) {
			transform.position = Vector3.MoveTowards(transform.position, blizszyPunkt, Time.deltaTime * 10);
			czyJedzie = true;
		}
		else {
			if (pelny) {
				transform.position = Vector3.MoveTowards(transform.position, najdalszyPunkt, Time.deltaTime * 10);
				for (var go in ciezarowki) {
						go.GetComponent(odjazd).start = true;
						}
				czyJedzie = true;
				}
				
					

		}
}
//function Ruszaj2 () {
	//transform.Translate(-Vector3.forward * Time.deltaTime * 5);
	
	
	
//}