#pragma strict
public var obiekt: GameObject;

function LateUpdate () {
	obiekt.GetComponent(odjazd).start = true;
}