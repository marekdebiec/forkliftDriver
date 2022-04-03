#pragma strict
private var kamerka : Camera;

function Update () {
	kamerka = Camera.main;
	//transform.rotation = new Quaternion( 0.0f, -kamerka.transform.rotation.y, 0.0f, transform.rotation.w );
	gameObject.transform.LookAt(kamerka.transform);
	
}