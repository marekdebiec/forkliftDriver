#pragma strict

var kphDisplay : GUIText;
var msDisplay : GUIText;
//var kph = rigidbody.velocity.magnitude * 3.6;
//var mph = rigidbody.velocity.magnitude * 2.237;
//mphDisplay.text = mph + " MPH";
var ms : float;
var kph : float;

function Update () {
	var ms = GetComponent.<Rigidbody>().velocity.magnitude;
	//var mph = GetComponent.<Rigidbody>().velocity.magnitude * 2.237;
	var kph = GetComponent.<Rigidbody>().velocity.magnitude * 3.6;
	//Mathf.Round(kph);
	//Round(kph, 2);
	//Mathf.decimal(kph, 2);
	kphDisplay.text = Mathf.Round(kph) + " km/h";
	msDisplay.text = Mathf.Round(ms) + " m/s";
}