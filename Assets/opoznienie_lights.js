#pragma strict
var delay : float = 5;

function Start () {
	Start2 () ;
}
function Start2 () {
	yield WaitForSeconds (delay);
	if(GetComponent.<lights>()){
		GetComponent.<lights>().enabled = true;
		}
}