#pragma strict
//var target1 : GameObject;
//var target2 : GameObject;
//var target3 : GameObject;
//var target4 : GameObject;
var gos : GameObject[];

function Start () {
	//target1 = GameObject.FindGameObjectWithTag("Player");
	//target2 = GameObject.FindGameObjectWithTag("woman");
	//target3 = GameObject.FindGameObjectWithTag("caveman");
	//target4 = GameObject.FindGameObjectWithTag("alien");
	gos = GameObject.FindGameObjectsWithTag("beer");
	
}

function Update () {
	Debug.Log(FindClosestEnemy().name);
	
}
//Find the name of the closest enemy
function FindClosestEnemy () : GameObject {
        
      // var gos : GameObject[];    
        
       //gos[0] = target1;
       //gos[1] = target2;
      // gos[2] = target3;
       //gos[3] = target4;
        
        var closest : GameObject; 
        var distance = Mathf.Infinity; 
        var position = transform.position; 
        // Iterate through them and find the closest one
        for (var go : GameObject in gos)  { 
            var diff = (go.transform.position - position);
            var curDistance = diff.sqrMagnitude; 
            if (curDistance < distance) { 
                closest = go; 
                distance = curDistance; 
            } 
        } 
        return closest;    
}