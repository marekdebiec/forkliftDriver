  #pragma strict
 var sky : Material;
 var rot : float = 90.0f;
 
 function Start () {
 	sky = RenderSettings.skybox;
 }
 
 function Update () {
     rot += 2 * Time.deltaTime;
     sky.SetFloat ("_Rotation", rot);
 }