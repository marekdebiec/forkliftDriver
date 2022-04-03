#pragma strict

public var part = 5;
public var nexttouse = 0;
public var halfheight = 1.000;

public var playercar : GameObject;
public var playercarscript : player_pos_gui;

public var enemycar : GameObject;
public var enemycarscript : Computer_Car_Script;

public var allcomputercars : Computer_Car_Script[];
var allcomputercars_ElementsExpand : boolean = true;
var allcomputercars_ElementsSize : int = 1;

public var lapsystemobject : GameObject;
public var lapscript : lap_script;
public var menucamefrom = 0;

function Start () {

}

function Update () {

}