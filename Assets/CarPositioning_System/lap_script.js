#pragma strict
public var PlayerCar : player_pos_gui;
private var ComputerCars : Computer_Car_Script[];
var lapDisplay : GUIText;
var numberOfLaps = 3;
private var initialFontSize = 0;
var finishedFontSize = 10;
public var positionfinished = 1; //1=1st, 2=2nd, etc...
public var hasfinished = false;
var useCs = false;
var CsObject : GameObject;
private var hasSentCsInfo = false;


function Start () {
var storageobject = GameObject.Find("Storage");
var storagescript = storageobject.GetComponent(storage);
ComputerCars = storagescript.allcomputercars;
initialFontSize = lapDisplay.fontSize;

}

function Update () {
var lapsbeen = PlayerCar.currentlap;
if (lapsbeen > numberOfLaps) {
if (hasfinished == false) {
positionfinished = positionfinished + 1;
}
lapDisplay.text = "Finished";
lapDisplay.fontSize = finishedFontSize;
hasfinished = true;
gameObject.GetComponent.<lap_script_cd>().Zastosuj(); // to ja

} else {
lapDisplay.fontSize = initialFontSize;
lapDisplay.text = "" + lapsbeen + "/" + numberOfLaps;
}
if (hasfinished == false) {
for(var car : Computer_Car_Script in ComputerCars) {
if (car.hasbeenaddedtofinishingposition == false) {
if (car.currentlap > numberOfLaps) {
car.hasbeenaddedtofinishingposition = true;
positionfinished = positionfinished + 1;
}
}
}
} else {
if (useCs == true) {
	if (hasSentCsInfo == false) {
		if (CsObject != null) {
			CsObject.BroadcastMessage("RaceFinished", positionfinished);
		}
		hasSentCsInfo = true;
	}
}

	
/*
DO STUFF WHEN FINISHED:

Use the script in the EndOfRaceScripts folder to do something at the end of the race
There is a c# and javascript version. (if you use the c# version look in the Inspector of the LapSystem object and tick the toggle, make sure you drag the object which the script is applied to into the revelent field)

If you wish to write your own here is some advice:

You can type code here (outside the comment area)
Refer to positionfinished if needed, 1=1st, 2=2nd, etc...

if you put your own variables here, they will not appear in the inspector
instead, you could call a function from another script or look into the editor
extension for this script if you are more experianced

for example if you put a script called 'dostuff' on this LapSystem object, use
the following to call the function 'interestingfunction' on the script:

var script = gameObject.GetComponent(dostuff);
script.interestingfunction();

But it is advised that you look at the scripts in the EndOfRaceScripts folder, if you did not understand the above (apologies ... it is not very clear)
*/


}
}