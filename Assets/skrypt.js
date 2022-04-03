#pragma strict
var delay = 3.0; //This implies a delay of 2 seconds.
 
function Start () {
	Fade();
	WaitAndDestroy();
}


function Fade() {
    for (var f = 1.0; f >= 0; f -= 0.1) {
        var c = GetComponent.<Renderer>().material.color;
        c.a = f;
        GetComponent.<Renderer>().material.color = c;
        yield WaitForSeconds(0.1);
    }
 
}
function WaitAndDestroy(){
    yield WaitForSeconds(delay);
    Destroy (gameObject);
 }