#pragma strict

var zielone : GameObject;
var czerwone : GameObject;
var pomaranczowe : GameObject;

function Start () {
	zielone.SetActive(false);
	pomaranczowe.SetActive(false);
	StartujemyZSwiatlami ();
}

function StartujemyZSwiatlami () {
	yield WaitForSeconds (2.5);
	pomaranczowe.SetActive(true);
	czerwone.SetActive(false);
	yield WaitForSeconds (2.5);
	pomaranczowe.SetActive(false);
	zielone.SetActive(true);
	yield WaitForSeconds (10);
	zielone.SetActive(false);
}