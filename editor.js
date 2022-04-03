#pragma strict
class editor extends EditorWindow {
var storageobject : GameObject;
var storagescript : storage;
var part = 0;
var placer : GameObject;
var showhelp = true;

    @MenuItem ("Window/Open Car Positioning System Editor")
    static function Init () {    
            var window : editor  = ScriptableObject.CreateInstance.<editor>();         
            window.Show();
            }
            
function OnGUI () {
if (storageobject == null) {
part = 0;
}

if (part == 0) {
if (storageobject == null) {
storageobject = GameObject.Find("Storage");
GUILayout.Label("Storage object not found.");
GUILayout.Label("Please create one.");
if(GUILayout.Button("Create Storage Object")) {
storageobject  = new GameObject ("Storage");
storageobject.AddComponent.<storage>();
}
} else {
part = 1;
}
}
if (part == 1) {
if (storagescript == null) {
storagescript = storageobject.gameObject.GetComponent("storage");
if (storageobject == null) {
} else {
GUILayout.Label("Storage script not on object");
GUILayout.Label("Please add one.");
if(GUILayout.Button("Add script")) {
storageobject.AddComponent.<storage>();
storagescript = storageobject.gameObject.GetComponent("storage");

}
}
} else {
part = 2;
}
}
if (part > 1) {
part = storagescript.part;
}
if (part == 5) {
GUILayout.Label("Welcome to the race position editor");
GUILayout.Label("To start you need your track and cars set up in the scene");
GUILayout.Label("Ready?");
if(GUILayout.Button("Lets get started")) {
storagescript.menucamefrom = 1;
storagescript.part = 6;
}
}
if (part == 6) {
GUILayout.Label("What would you like to do?");
GUILayout.Label("");
if(GUILayout.Button("Start at the beginning")) {
storagescript.part = 7;
}
GUILayout.Label("");
if(GUILayout.Button("Add position sensors to track")) {
storagescript.menucamefrom = 2;
if (placer == null) {
storagescript.part = 10;
} else {
storagescript.part = 11;
}
}
if(GUILayout.Button("Add position script to player's car")) {
storagescript.menucamefrom = 3;
storagescript.part = 14;
}
if(GUILayout.Button("Add position script to computer cars")) {
storagescript.menucamefrom = 4;
storagescript.part = 16;
}
if(GUILayout.Button("Lap system")) {
storagescript.menucamefrom = 5;
storagescript.part = 17;
}
if(GUILayout.Button("Final things to check")) {
storagescript.menucamefrom = 6;
storagescript.part = 18;
}
GUILayout.Label("");
GUILayout.Label("Important information:");
GUILayout.Label("This package does not provide scripts for ");
GUILayout.Label("car control");
GUILayout.Label("");
GUILayout.Label("There will be a 'storage' object in your");
GUILayout.Label("scene. DO NOT EDIT IT, until you have finished");
GUILayout.Label("setting everything else up. You may loose");
GUILayout.Label("important information.");
GUILayout.Label("");
GUILayout.Label("If you are having problems, please look ");
GUILayout.Label("through the PDF file or fill in a contact");
GUILayout.Label("form on our website.");
GUILayout.Label("");
if(GUILayout.Button("Go to website")) {
Application.OpenURL ("http://solution-studios-for-unity.moonfruit.com/");
}
}
if (part == 7) {
GUILayout.Label("Would you like detailed explanations?");
if(GUILayout.Button("Yes, I want to know why I am doing stuff")) {
storagescript.part = 8;
showhelp = true;
}
if(GUILayout.Button("No")) {
storagescript.part = 8;
showhelp = false;
}
}
if (part == 8) {
if (showhelp == true) {
storagescript.part = 9;
} else {
showhelp = false;
storagescript.part = 9;
}
}
if (part == 9) {
GUILayout.Label("This is how it works:");
GUILayout.Label("You will set up gameobjects around the track");
GUILayout.Label("which will hold variables of their progress");
GUILayout.Label("around the track. The cars have scripts which ");
GUILayout.Label("find the nearest object and detect it's");
GUILayout.Label("progress variable. The car script compares ");
GUILayout.Label("this with the other cars progress' to see");
GUILayout.Label("who is in the lead.");
GUILayout.Label("This is displayed on the players gui and all");
GUILayout.Label("of the enemy cars will have numbers over them");
GUILayout.Label("telling the player their position");
GUILayout.Label("");
GUILayout.Label("Let's start by adding the position sensors to");
GUILayout.Label("the track:");
GUILayout.Label("");
if(GUILayout.Button("Start")) {
storagescript.part = 10;
}
}
if (part == 10) {
if (placer == null) {
placer = GameObject.Find("Placer");
GUILayout.Label("'Placer' object not found.");
GUILayout.Label("Please drag one into the scene from prefab folder.");
} else {
storagescript.part = 11;
}
}
if (part == 11) {
showhelp = EditorGUILayout.Toggle("Show extra info?",showhelp);
if (showhelp == true) {
GUILayout.Label("Move the placer object around your track.");
GUILayout.Label("Change the position, scale, and rotation so it is");
GUILayout.Label("perpendicular to the track direction.");
GUILayout.Label("Start at the start of your track and slowly");
GUILayout.Label("move round to the finish.");
GUILayout.Label("");
GUILayout.Label("Use this button to lower the 'placer' object");
GUILayout.Label("to the surface of the track:");
GUILayout.Label("");
}
if(GUILayout.Button("Lower")) {
if (placer == null) {
placer = GameObject.Find("Placer");
}
var hit : RaycastHit;
if (Physics.Raycast (placer.gameObject.transform.position, placer.gameObject.transform.TransformDirection (Vector3.down), hit,100)) {
placer.gameObject.transform.position.y = placer.gameObject.transform.position.y-hit.distance;
} 
}
GUILayout.Label("");
if (showhelp == true) {
GUILayout.Label("Click this button to create the position sensors");
GUILayout.Label("where each of the sphere objects are on the 'placer'");
GUILayout.Label("game object.");
}
if(GUILayout.Button("Create Sensors")) {
var one = GameObject.Find("placer1");
var two = GameObject.Find("placer2");
var three = GameObject.Find("placer3");
var four = GameObject.Find("placer4");
var five = GameObject.Find("placer5");
var six = GameObject.Find("placer6");
var seven = GameObject.Find("placer7");

var pparent = new GameObject ("");
pparent.gameObject.name = "" + storagescript.nexttouse;
pparent.gameObject.transform.parent = storageobject.gameObject.transform;


var one_created = new GameObject ("PositionSensor");
one_created.transform.position = one.transform.position;
var onescript = one_created.gameObject.AddComponent(position_sensor);
onescript.positionnumber = storagescript.nexttouse;
one_created.gameObject.transform.parent = pparent.gameObject.transform;


var two_created = new GameObject ("PositionSensor");
two_created.transform.position = two.transform.position;
two_created.gameObject.AddComponent.<position_sensor>();
var two_script = two_created.gameObject.GetComponent(position_sensor);
two_script.positionnumber = storagescript.nexttouse;
two_created.gameObject.transform.parent = pparent.gameObject.transform;

var three_created = new GameObject ("PositionSensor");
three_created.transform.position = three.transform.position;
three_created.AddComponent.<position_sensor>();
var three_script = three_created.gameObject.GetComponent(position_sensor);
three_script.positionnumber = storagescript.nexttouse;
three_created.gameObject.transform.parent = pparent.gameObject.transform;

var four_created = new GameObject ("PositionSensor");
four_created.transform.position = four.transform.position;
four_created.AddComponent.<position_sensor>();
var four_script = four_created.gameObject.GetComponent(position_sensor);
four_script.positionnumber = storagescript.nexttouse;
four_created.gameObject.transform.parent = pparent.gameObject.transform;

var five_created = new GameObject ("PositionSensor");
five_created.transform.position = five.transform.position;
five_created.AddComponent.<position_sensor>();
var five_script = five_created.gameObject.GetComponent(position_sensor);
five_script.positionnumber = storagescript.nexttouse;
five_created.gameObject.transform.parent = pparent.gameObject.transform;

var six_created = new GameObject ("PositionSensor");
six_created.transform.position = six.transform.position;
six_created.AddComponent.<position_sensor>();
var six_script = six_created.gameObject.GetComponent(position_sensor);
six_script.positionnumber = storagescript.nexttouse;
six_created.gameObject.transform.parent = pparent.gameObject.transform;

var seven_created = new GameObject ("PositionSensor");
seven_created.transform.position = seven.transform.position;
seven_created.AddComponent.<position_sensor>();
var seven_script = seven_created.gameObject.GetComponent(position_sensor);
seven_script.positionnumber = storagescript.nexttouse;
seven_created.gameObject.transform.parent = pparent.gameObject.transform;

storagescript.nexttouse = storagescript.nexttouse + 1;
}
GUILayout.Label("");

if(GUILayout.Button("Destroy All Sensors")) {
storagescript.nexttouse = 0;
Destroyy();
}

if (showhelp == true) {
GUILayout.Label("");
GUILayout.Label("PUT THEM IN ORDER. DO NOT JUMP FORWARDS AND ");
GUILayout.Label("BACKWARDS AROUND THE TRACK, because it won't ");
GUILayout.Label("work afterwards");
GUILayout.Label("");
GUILayout.Label("Then move the placer object on, round the track a ");
GUILayout.Label("short distance. The shorter you move it, and the ");
GUILayout.Label("more position sensors you create, the more accurate ");
GUILayout.Label("the system will be.");
GUILayout.Label("");
GUILayout.Label("If you don't understand, look in the PDF for a");
GUILayout.Label("better explanation with screenshots.");
GUILayout.Label("");
GUILayout.Label("Have you finished? Do the sensors go all of the way");
GUILayout.Label("round the track?");
}
GUILayout.Label("");
if(storagescript.menucamefrom == 2){
if(GUILayout.Button("Back to menu")) {
if (placer == null) {
} else {
DestroyImmediate(placer.gameObject);
}
storagescript.part = 6;
}
} else {
if(GUILayout.Button("Finished")) {
if (placer == null) {
} else {
DestroyImmediate(placer.gameObject);
}
storagescript.part = 12;
}
}
}
if (part == 12) {
GUILayout.Label("You now need to raise the sensors to half the height");
GUILayout.Label("of your car.");
GUILayout.Label("");
storagescript.halfheight = EditorGUILayout.FloatField("Half height of car:", storagescript.halfheight);
GUILayout.Label("");
if(GUILayout.Button("Raise")) {
Raise();
}
GUILayout.Label("");
if(GUILayout.Button("Finished")) {
storagescript.part = 13;

}
}
if (part == 13) {
GUILayout.Label("Time to move on to the player car");
GUILayout.Label("");
if(GUILayout.Button("Move on")) {
storagescript.part  = 14;
}

}
if (part == 14) {
showhelp = EditorGUILayout.Toggle("Show extra info?",showhelp);
GUILayout.Label("");
if (showhelp == true) {
GUILayout.Label("Add a script to the car showing it's position");
GUILayout.Label("on the screen in the game.");
GUILayout.Label("After you have added the script, look at it ");
GUILayout.Label("in the inspector and fill in the necessary");
GUILayout.Label("fields.");
GUILayout.Label("");
GUILayout.Label("If you want to use gui (as shown in the demo),");
GUILayout.Label("you can change the fields in the inspector ");
GUILayout.Label("afterwards.");
GUILayout.Label("");
}
storagescript.playercar = EditorGUILayout.ObjectField("Player Car: ",storagescript.playercar, GameObject, true);
GUILayout.Label("");
if(GUILayout.Button("Add script")) {
storagescript.playercarscript = storagescript.playercar.AddComponent (player_pos_gui);
storagescript.playercarscript.numberofpositions = storagescript.nexttouse-1;
storagescript.playercarscript.computercars = storagescript.allcomputercars;
if(storagescript.menucamefrom == 3){
} else {
storagescript.part = 15;
}
}
GUILayout.Label("");
if(storagescript.menucamefrom == 3){
if(GUILayout.Button("Back to menu")) {
storagescript.part = 6;
}
} else {
if(GUILayout.Button("Skip")) {
storagescript.part = 15;
}
}
}
if (part == 15) {
GUILayout.Label("Time to move on to the computer cars");
GUILayout.Label("");
GUILayout.Label("Your cars should be set up with ai allowing ");
GUILayout.Label("them to drive around the track, if you do not");
GUILayout.Label("have ai set up there is are links to helpful.");
GUILayout.Label("(free) projects at the end of the pdf.");

GUILayout.Label("");
if(GUILayout.Button("Computer cars")) {
storagescript.part  = 16;
}
}
if (part == 16) {
showhelp = EditorGUILayout.Toggle("Show extra info?",showhelp);
GUILayout.Label("");
if (showhelp == true) {
GUILayout.Label("The script you will apply to computer cars here,");
GUILayout.Label("does two things:");
GUILayout.Label("1. Communicates with player script to compare");
GUILayout.Label("   positions.");
GUILayout.Label("2. Adds a texture above the car to show it's");
GUILayout.Label("   position in the game.");
GUILayout.Label("");
}

storagescript.playercarscript = EditorGUILayout.ObjectField("Player Car Script: ",storagescript.playercarscript, player_pos_gui, true);
storagescript.enemycar = EditorGUILayout.ObjectField("Computer Car: ",storagescript.enemycar, GameObject, true);
GUILayout.Label("");
if(GUILayout.Button("Add script")) {


var computercarplane : GameObject = GameObject.CreatePrimitive(PrimitiveType.Plane);
DestroyImmediate(computercarplane.GetComponent(MeshCollider));
computercarplane.transform.position = storagescript.enemycar.transform.position;
computercarplane.GetComponent.<Renderer>().castShadows = false;
computercarplane.transform.parent = storagescript.enemycar.gameObject.transform;
computercarplane.transform.eulerAngles = Vector3(90,180,0);//////////////////////////////////////////////////////////////////////////////////////////////////////
computercarplane.transform.position.y = computercarplane.transform.position.y + 2;
computercarplane.transform.localScale = Vector3(0.2,0.1,0.1);

storagescript.enemycarscript = storagescript.enemycar.AddComponent (Computer_Car_Script);
storagescript.enemycarscript.objecttochangetexture = computercarplane;
storagescript.enemycarscript.playercar = storagescript.playercarscript.gameObject;
var santaa = new Computer_Car_Script[0];
santaa = storagescript.allcomputercars;
storagescript.allcomputercars = new Computer_Car_Script[(santaa.Length + 1)];
var rudolff = 0;
for (var objj : Computer_Car_Script in santaa) {
storagescript.allcomputercars[rudolff] = santaa[rudolff];
rudolff = rudolff + 1;
}
storagescript.allcomputercars[(storagescript.allcomputercars.Length-1)] = storagescript.enemycarscript;

var santaaa = new Computer_Car_Script[0];
santaaa = storagescript.playercarscript.computercars;
storagescript.playercarscript.computercars = new Computer_Car_Script[(santaaa.Length + 1)];
var rudolfff = 0;
for (var objjj : Computer_Car_Script in santaaa) {
storagescript.playercarscript.computercars[rudolfff] = santaaa[rudolfff];
rudolfff = rudolfff + 1;
}
storagescript.playercarscript.computercars[(storagescript.playercarscript.computercars.Length-1)] = storagescript.enemycarscript;


for (var car_one_script : Computer_Car_Script in storagescript.allcomputercars) {
car_one_script.othercomputercars = new Computer_Car_Script[0];
for (var car_two_script : Computer_Car_Script in storagescript.allcomputercars) {
if (car_one_script == car_two_script) {
} else {


var badger = new Computer_Car_Script[0];
badger = car_one_script.othercomputercars;
car_one_script.othercomputercars = new Computer_Car_Script[(badger.Length + 1)];
var pork = 0;
for (var obbjjj : Computer_Car_Script in badger) {
car_one_script.othercomputercars[pork] = badger[pork];
pork = pork + 1;
}
car_one_script.othercomputercars[(car_one_script.othercomputercars.Length-1)] = car_two_script;


}
}
}


}
GUILayout.Label("");
if (showhelp == true) {
GUILayout.Label("Once you have added this script, please check");
GUILayout.Label("it in the inspector, and fill in the reqired");
GUILayout.Label("fields.");
GUILayout.Label("");
}
if(storagescript.menucamefrom == 4){
if(GUILayout.Button("Back to menu")) {
storagescript.part = 6;
}
} else {
if(GUILayout.Button("Lap System")) {
storagescript.part = 17;
}
}
}
if (part == 17) {
showhelp = EditorGUILayout.Toggle("Show extra info?",showhelp);
if (showhelp == true) {
GUILayout.Label("");
GUILayout.Label("This part of the editor will create a lap system");
GUILayout.Label("object in your scene. It bases a lap on reaching");
GUILayout.Label("the finial position sensor and then returning to");
GUILayout.Label("the first.");
}
GUILayout.Label("");
if(GUILayout.Button("Create lap gameObject")) {
storagescript.lapsystemobject  = new GameObject ("LapSystem");
storagescript.lapscript = storagescript.lapsystemobject.AddComponent(lap_script);
storagescript.lapscript.PlayerCar = storagescript.playercarscript;
}
GUILayout.Label("");
if (showhelp == true) {
GUILayout.Label("Please go to the lap system object in the inspector");
GUILayout.Label("and fill in the necessary fields, such as the");
GUILayout.Label("number of laps.");
GUILayout.Label("");
GUILayout.Label("To make something happen at the end of the race,");
GUILayout.Label("e.g. ai take control of the car, and for the");
GUILayout.Label("finishing position to be shown on the screen,");
GUILayout.Label("open the 'lap_script' file and it clearly shows");
GUILayout.Label("where you can add your code.");
GUILayout.Label("");
}
if (storagescript.menucamefrom == 5) {
if(GUILayout.Button("Back to menu")) {
storagescript.part = 6;
}
} else {
if(GUILayout.Button("Next")) {
storagescript.part = 18;
}
}
}
if (part == 18) {
GUILayout.Label("Just to make sure you have filled in all of the");
GUILayout.Label("fields in the inspector, you should have looked");
GUILayout.Label("at, and check the scripts on these objects:");
GUILayout.Label("Storage object");
GUILayout.Label("Player car");
GUILayout.Label("All computer cars");
GUILayout.Label("Lap system");
GUILayout.Label("");
GUILayout.Label("You may also add code to the 'lap_system' script");
GUILayout.Label("to change what happens at the end of the race.");
GUILayout.Label("");
GUILayout.Label("Plus, make sure you have deleted the 'Placer'");
GUILayout.Label("game object, you don't need it anymore.");
GUILayout.Label("");
if (storagescript.menucamefrom == 6) {
GUILayout.Label("You can also:");
GUILayout.Label("Create you own gui textures to display as the");
GUILayout.Label("player's race position e.g. 1st, 2nd, 3rd ... etc");
GUILayout.Label("");
GUILayout.Label("And you will find a plane object as a child of");
GUILayout.Label("each of your computer cars. This will display");
GUILayout.Label("a position texture if it is enabled in the inspector");
GUILayout.Label("so move it to where the player's car will be able to");
GUILayout.Label("see it in your game.");
GUILayout.Label("");
GUILayout.Label("If it doesn't work after this, please look through");
GUILayout.Label("the FAQ in the PDF file or fill in a contact form");
GUILayout.Label("on our website.");
GUILayout.Label("");
if(GUILayout.Button("Back to menu")) {
storagescript.part = 6;
}
} else {
if(GUILayout.Button("Next")) {
storagescript.part = 19;
}
}
}
if (part == 19) {
GUILayout.Label("");
GUILayout.Label("Thank you for using this package, there are only");
GUILayout.Label("two things left to do:");
GUILayout.Label("");
GUILayout.Label("Create you own gui textures to display as the");
GUILayout.Label("player's race position e.g. 1st, 2nd, 3rd ... etc");
GUILayout.Label("");
GUILayout.Label("And you will find a plane object as a child of");
GUILayout.Label("each of your computer cars. This will display");
GUILayout.Label("a position texture if it is enabled in the inspector");
GUILayout.Label("so move it to where the player's car will be able to");
GUILayout.Label("see it in your game.");
GUILayout.Label("");
GUILayout.Label("If it doesn't work after this, please look through");
GUILayout.Label("the FAQ in the PDF file or fill in a contact form");
GUILayout.Label("on our website.");
GUILayout.Label("");
}
if (part>6) {
GUILayout.Label("");
GUILayout.Label("");
if(GUILayout.Button("Menu")) {
storagescript.part = 6;
}
}
}

function Destroyy () {
var childs = storageobject.gameObject.transform.childCount;
if(childs > 0) {
for (var child : Transform in storageobject.transform) {
DestroyImmediate(child.gameObject);
}
Destroyy();
}
}

function Raise() {
storageobject.gameObject.transform.position.y = storageobject.gameObject.transform.position.y + storagescript.halfheight;
}

}