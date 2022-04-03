using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class player_pos_gui : MonoBehaviour {
	
	bool showgui = true;

	public Texture[] PosTextures;
	public bool ElementsExpand  = true;
	public int ElementsSize = 1;

	int raceposition = 0;

	public int position_x = 0;
	public int position_y = 0;
	public int position_width = 0;
	public int position_height = 0;
	//public var computercars : Computer_Car_Script[] = new Computer_Car_Script[computercars_ElementsSize];
	public Computer_Car_Script[] computercars ;
	public bool computercars_ElementsExpand  = true;
	public int computercars_ElementsSize = 1;



	public int positionn = 0;
	public int lastposition = 0;
	public GameObject[] positionobjectarray ;
	GameObject closest  ;
	position_sensor script  ;
	public float currentlap = 1.0f;
	public int numbergoneback = 0;
	public int numberofpositions = 0;
	public float positionpercenage = 0.0f;
	
	// Use this for initialization
	void Start () {
		var bob = GameObject.FindObjectsOfType(typeof(GameObject));
		foreach (GameObject tom in bob)
		{
			if (tom.gameObject.name == "PositionSensor")
			{


				var santa = new GameObject[0];
				santa = positionobjectarray;
				positionobjectarray = new GameObject[(santa.Length + 1)];
				var rudolf = 0;
				foreach (GameObject obj   in santa)
				{
					positionobjectarray[rudolf] = santa[rudolf];
					rudolf = rudolf + 1;
				}
				positionobjectarray[(positionobjectarray.Length - 1)] = tom.gameObject;
			}
		}
	}
	
	// Update is called once per frame
	void Update()
	{




		raceposition = 0;
		foreach (Computer_Car_Script scripts in computercars)
		{
			if ((scripts.currentlap - scripts.numbergoneback) > (currentlap - numbergoneback))
			{
				raceposition = raceposition + 1;
			}
			else
			{
				if ((scripts.currentlap - scripts.numbergoneback) == (currentlap - numbergoneback))
				{
					if (scripts.positionn > positionn)
					{
						raceposition = raceposition + 1;
					}
					else
					{
						if (scripts.positionn == positionn)
						{
							if (scripts.positionpercenage > positionpercenage)
							{
								raceposition = raceposition + 1;
							}
						}
					}
				}
			}
		}




		if (closest == null)
		{
		}
		else
		{
			lastposition = positionn;
			script = closest.gameObject.GetComponent<position_sensor>();
			positionn = script.positionnumber;
			if ((lastposition == numberofpositions) && (positionn == 0))
			{
				if (numbergoneback > 0)
				{
					numbergoneback = numbergoneback - 1;
				}
				else
				{
					currentlap = currentlap + 1;
				}
			}
			if ((lastposition == 0) && (positionn == numberofpositions))
			{
				numbergoneback = numbergoneback + 1;
			}
		}

		var nearestDistanceSqr = Mathf.Infinity;

		foreach (GameObject obj  in positionobjectarray)
		{
			var objectPos = obj.transform.position;
			var distanceSqr = (objectPos - transform.position).sqrMagnitude;
			if (distanceSqr < nearestDistanceSqr)
			{
				closest = obj.gameObject;
				nearestDistanceSqr = distanceSqr;
			}
		}




		var closestscript = closest.gameObject.GetComponent<position_sensor>();
		var closestpositionnumber = closestscript.positionnumber;
		var infrontnumber = 0;
		var behindnumber = 0;
		if (closestpositionnumber == numberofpositions)
		{
			infrontnumber = 0;
			behindnumber = closestscript.positionnumber - 1;
		}
		else
		{
			if (closestpositionnumber == 0)
			{
				infrontnumber = 1;
				behindnumber = numberofpositions;
			}
			else
			{
				infrontnumber = closestscript.positionnumber + 1;
				behindnumber = closestscript.positionnumber - 1;
			}
		}
		//find closest between infront objects
		GameObject closestinfrontobject = new GameObject();
		var neearestDistanceSqr = Mathf.Infinity;
		foreach (GameObject obbj  in positionobjectarray)
		{
			var posnumberinobbj = obbj.gameObject.GetComponent<position_sensor>().positionnumber;
			if (posnumberinobbj == infrontnumber)
			{
				var obbjectPos = obbj.transform.position;
				var diistanceSqr = (obbjectPos - transform.position).sqrMagnitude;
				if (diistanceSqr < neearestDistanceSqr)
				{
					closestinfrontobject = obbj.gameObject;
					neearestDistanceSqr = diistanceSqr;
				}
			}
		}
	//find closest between behind objects
		GameObject closestbehindobject = new GameObject(); 
		var neeearestDistanceSqr = Mathf.Infinity;
		foreach (GameObject obbbj  in positionobjectarray)
		{
			var posnumberinobbbj = obbbj.gameObject.GetComponent<position_sensor>().positionnumber;
			if (posnumberinobbbj == behindnumber)
			{
				var obbbjectPos = obbbj.transform.position;
				var diiistanceSqr = (obbbjectPos - transform.position).sqrMagnitude;
				if (diiistanceSqr < neeearestDistanceSqr)
				{
					closestbehindobject = obbbj.gameObject;
					neeearestDistanceSqr = diiistanceSqr;
				}
			}
		}


		var distancebetweenposandinfront = Vector3.Distance(closestinfrontobject.transform.position, closestbehindobject.transform.position);
		var distancebetweenposandbehind = Vector3.Distance(closestbehindobject.transform.position, gameObject.transform.position);
		float distancepercentage ;
		distancepercentage = distancebetweenposandbehind / distancebetweenposandinfront;
		positionpercenage = distancepercentage * 100;
	}
	void OnGUI()
	{
		if (showgui == true)
		{
			var texturetouse = PosTextures[raceposition];
			GUI.DrawTexture(new Rect(position_x, position_y, position_width, position_height), texturetouse, ScaleMode.StretchToFill, true, 10.0f);
		}

	}
}
