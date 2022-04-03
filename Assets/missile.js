#pragma strict

//var target : Transform; 
//private var lineRenderer : LineRenderer;
private var viewThreshold: float = 0.1; // 0 = back
// This would cast rays only against colliders in layer 8
//private var layerMask = 1 << 8;

//var gos : GameObject[];      

var damping = 1.0;
var drivespeed = 15;
//var cel : GameObject;

function Start () {

	//cel = GameObject.Find("cell");
//	lineRenderer = GetComponent(LineRenderer);
//	lineRenderer.SetPosition(0, transform.position);
//	lineRenderer.SetPosition(1, transform.position);
	//target1 = GameObject.FindGameObjectWithTag("Player");
//	target2 = GameObject.FindGameObjectWithTag("woman");
//	target3 = GameObject.FindGameObjectWithTag("caveman");
//	target4 = GameObject.FindGameObjectWithTag("alien");
}
 //Find the name of the closest enemy
function FindClosestEnemy () : GameObject {
        
        var gos : GameObject[];         
       //gos[0] = target1;
       //gos[0] = target2;
       //gos[1] = target3;
       //gos[2] = target4;
        
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
//function Update () {
//		//target = FindClosestEnemy().transform;
//	   	transform.Translate(Vector3.forward * Time.deltaTime * drivespeed);       
//      
//         var rotation = Quaternion.LookRotation(target.position - transform.position);
//         
//      // var rotation = Quaternion.LookRotation(FindClosestEnemy().transform.position - transform.position);
//        transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
//        
//        
//        //var hit : RaycastHit;
//        
//        
//       		 //target = hit.transform;
//       
//        
//        
//       
//}

function Update () {
	var forward = transform.forward;
	var toOther = FindClosestEnemy().transform.position - transform.position;
	var angle = Vector3.Dot(forward, toOther);
	
	if ( angle > viewThreshold)
	{	
		
		//var targetRotation = Quaternion.LookRotation(cel.transform.position - transform.position);
		//transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, 10 * Time.deltaTime);
		
		 	transform.Translate(Vector3.forward * Time.deltaTime * drivespeed);       
      
         //var rotation = Quaternion.LookRotation(target.position - transform.position);
         var rotation = Quaternion.LookRotation(FindClosestEnemy().transform.position - transform.position);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
	}
}
