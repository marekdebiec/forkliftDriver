#pragma strict
var target2 : Transform;
var object : GameObject;
var gemGrid=1.0;
var podniesiony : Transform;
var distance : float;

function Start () {

}

function Update () {

}
function Zniszcz () {
	target2 = GameObject.FindWithTag("beer").transform;
	podniesiony = GameObject.FindWithTag("podniesiony").transform;
	
	distance = Vector3.Distance (target2.transform.position, podniesiony.transform.position);
	Debug.DrawLine (podniesiony.transform.position, target2.transform.position, Color.red, 5.0f);
	//jesli taki sam kolor to
	if (target2.GetComponent.<Renderer>().material.name == podniesiony.GetComponent.<Renderer>().material.name) {
		if (distance < 2.0) {
			
			var halo : Component = GetComponent("Halo"); 
			halo.GetType().GetProperty("enabled").SetValue(halo, true, null);
			// Kills the game objects
			Destroy (gameObject, 3);
			Destroy (target2, 3);
		}
	}
}
function Find () {
	var gos1 : GameObject[];
	gos1 = GameObject.FindGameObjectsWithTag("beer");
	podniesiony = GameObject.FindWithTag("podniesiony").transform;
	for (var go in gos1) {
				//var diff = go.transform.position - position;
				//var gos = diff.sqrMagnitude;
				var hit : RaycastHit;
				var direction : Vector3;
				//kierunek
				
				//var toPoint=podniesiony.transform.position + direction * gemGrid;
				Debug.DrawLine(podniesiony.transform.position, Vector3.forward, Color.cyan);
				if (go.GetComponent.<Renderer>().material.name == podniesiony.GetComponent.<Renderer>().material.name) {
				
					if(Physics.Raycast(podniesiony.transform.position, Vector3.forward, hit)){
						var dist = Vector3.Distance(podniesiony.transform.position, hit.transform.position);
						if(dist < 5.0) {
							Destroy (podniesiony);
							}
							}
				}
			}
	
}
function FindAllConnectedGems(startObject : GameObject) : Array{
    var Data : Array=new Array(startObject);
    var cont=true;
    for(var i=0; i<Data.length; i++)
    {
    	//var gems=CheckForGems(Data[data[i]);
        var gems=CheckForGems(Data[i]);
        for(var j=0; j<gems.length; j++){
            var found=false;
            for(var k=0; k<Data.length; k++){
            	//if(gems[j]=Data[k]) found=true;
                if(gems[j]==Data[k]) found=true;
            }
            if(!found) Data.Add(gems[j]);
        }
    }
    return Data;
}
function CheckForGems(fromObject : GameObject) : Array{
   	var retval : Array=new Array();
    CheckGem(fromObject, Vector3.up, retval);
    CheckGem(fromObject, Vector3.right, retval);
    CheckGem(fromObject, -Vector3.up, retval);
    CheckGem(fromObject, -Vector3.right, retval);
    return retval;
}
function CheckGem(fromObject : GameObject, direction : Vector3, array : Array){
   	var hit : RaycastHit;
    var toPoint=fromObject.transform.position + direction * gemGrid;
    if(Physics.Linecast(fromObject.transform.position, toPoint, hit))
    	//AddGem(array, object);
        AddGem(array, object, tag);
}
function AddGem(array : Array, object : GameObject, tag : String){
     if(object.tag==tag) array.Add(object);
}