#pragma strict
var guzik : GameObject; 

function Start () {
	guzik = GameObject.Find("Button"); 
	guzik.SetActive (false); 
}
function Zastosuj () {
	guzik.SetActive (true);
}