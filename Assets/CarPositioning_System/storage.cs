using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class storage : MonoBehaviour {
	public Computer_Car_Script[] allcomputercars  ;
	public int part = 5;
	public int nexttouse = 0;
	public float halfheight = 1.000f;

	public GameObject playercar  ;
	public player_pos_gui playercarscript ;

	public GameObject enemycar  ;
	public Computer_Car_Script enemycarscript  ;

	//public var allcomputercars : Computer_Car_Script[];
	bool allcomputercars_ElementsExpand = true;
	int allcomputercars_ElementsSize  = 1;

	public GameObject lapsystemobject  ;
	public lap_script lapscript  ;
	public int menucamefrom = 0;

	
}
