#pragma strict
public var hasbeenaddedtofinishingposition = false;

//gui
var textureEnabled = true;
public var objecttochangetexture : GameObject;
var positionTextures : Material[] = new Material[ElementsSize];
var ElementsExpand : boolean = true;
var ElementsSize : int = 1;


//race position stuff
var raceposition = 0;
public var playercar : GameObject;
public var othercomputercars : Computer_Car_Script[] = new Computer_Car_Script[othercomputercars_ElementsSize];
var othercomputercars_ElementsExpand : boolean = true;
var othercomputercars_ElementsSize : int = 1;



//detector stuff
public var positionn = 0;
public var positionpercenage = 0.0;
var lastposition = 0;
var positionobjectarray : GameObject[];
var closest : GameObject;
var script : position_sensor;
public var currentlap = 1;
public var numbergoneback = 0;
public var numberofpositions = 0;

function Start () {
var bob = GameObject.FindObjectsOfType(typeof (GameObject));
for (var tom : GameObject in bob) {
if (tom.gameObject.name == "PositionSensor") {


var santa = new GameObject[0];
santa = positionobjectarray;
positionobjectarray = new GameObject[(santa.Length + 1)];
var rudolf = 0;
for (var obj : GameObject in santa) {
positionobjectarray[rudolf] = santa[rudolf];
rudolf = rudolf + 1;
}
positionobjectarray[(positionobjectarray.Length-1)] = tom.gameObject;
}
}
}

function Update () {

	
	
	
//raceposition stuff
raceposition = 0;
if (othercomputercars.Length > 0) {
for (var scripts : Computer_Car_Script in othercomputercars) {
if ((scripts.currentlap-scripts.numbergoneback) > (currentlap-numbergoneback)) {
raceposition = raceposition + 1;
} else {
if ((scripts.currentlap-scripts.numbergoneback) == (currentlap-numbergoneback)) {
if (scripts.positionn > positionn) {
raceposition = raceposition + 1;
} else {
if (scripts.positionn == positionn) {
if (scripts.positionpercenage > positionpercenage) {
raceposition = raceposition + 1;
}
}
}
}
}
}
}
var playerscript = playercar.gameObject.GetComponent(player_pos_gui);
if ((playerscript.currentlap-playerscript.numbergoneback) > (currentlap-numbergoneback)) {
raceposition = raceposition + 1;
} else {
if ((playerscript.currentlap-playerscript.numbergoneback) == (currentlap-numbergoneback)) {
if (playerscript.positionn > positionn) {
raceposition = raceposition + 1;
} else {
if (playerscript.positionn == positionn) {
if (playerscript.positionpercenage > positionpercenage) {
raceposition = raceposition + 1;
}
}
}
}
}

//texture stuff
if (textureEnabled == false) {
objecttochangetexture.gameObject.GetComponent.<Renderer>().enabled = false;
} else {
objecttochangetexture.gameObject.GetComponent.<Renderer>().enabled = true;
objecttochangetexture.gameObject.GetComponent.<Renderer>().material = positionTextures[raceposition];
}


if (closest == null) {
} else {
lastposition = positionn;
script = closest.gameObject.GetComponent("position_sensor");
positionn = script.positionnumber;
if ((lastposition == numberofpositions)&&(positionn == 0)) {
if (numbergoneback > 0) {
numbergoneback = numbergoneback - 1;
} else {
currentlap = currentlap + 1;
}
}
if ((lastposition == 0)&&(positionn == numberofpositions)) {
numbergoneback = numbergoneback + 1;
}
}

var nearestDistanceSqr = Mathf.Infinity;

for (var obj : GameObject in positionobjectarray) {
         var objectPos = obj.transform.position;       
         var distanceSqr = (objectPos - transform.position).sqrMagnitude;         
         if (distanceSqr < nearestDistanceSqr) {           
         closest = obj.gameObject;
         nearestDistanceSqr = distanceSqr;        
         }    
         }     

var closestscript = closest.gameObject.GetComponent(position_sensor);
var closestpositionnumber = closestscript.positionnumber;
var infrontnumber = 0;
var behindnumber = 0;
if (closestpositionnumber == numberofpositions) {
infrontnumber = 0;
behindnumber = closestscript.positionnumber - 1;
} else {
if (closestpositionnumber == 0) {
infrontnumber = 1;
behindnumber = numberofpositions;
} else {
infrontnumber = closestscript.positionnumber + 1;
behindnumber = closestscript.positionnumber - 1;
}
}
//find closest between infront objects
var closestinfrontobject : GameObject;
var neearestDistanceSqr = Mathf.Infinity;
for (var obbj : GameObject in positionobjectarray) {
	var posnumberinobbj = obbj.gameObject.GetComponent(position_sensor).positionnumber;
	if (posnumberinobbj == infrontnumber) {
         var obbjectPos = obbj.transform.position;       
         var diistanceSqr = (obbjectPos - transform.position).sqrMagnitude;         
         if (diistanceSqr < neearestDistanceSqr) {           
         closestinfrontobject = obbj.gameObject;
         neearestDistanceSqr = diistanceSqr;        
         }    
         }    
		 }
//find closest between behind objects
var closestbehindobject : GameObject;
var neeearestDistanceSqr = Mathf.Infinity;
for (var obbbj : GameObject in positionobjectarray) {
	var posnumberinobbbj = obbbj.gameObject.GetComponent(position_sensor).positionnumber;
	if (posnumberinobbbj == behindnumber) {
         var obbbjectPos = obbbj.transform.position;       
         var diiistanceSqr = (obbbjectPos - transform.position).sqrMagnitude;         
         if (diiistanceSqr < neeearestDistanceSqr) {           
         closestbehindobject = obbbj.gameObject;
         neeearestDistanceSqr = diiistanceSqr;        
         }    
         }    
		 }
		 

var distancebetweenposandinfront = Vector3.Distance(closestinfrontobject.transform.position, closestbehindobject.transform.position);
var distancebetweenposandbehind = Vector3.Distance(closestbehindobject.transform.position, gameObject.transform.position);
var distancepercentage : float;
distancepercentage = distancebetweenposandbehind/distancebetweenposandinfront;
positionpercenage = distancepercentage * 100;
}