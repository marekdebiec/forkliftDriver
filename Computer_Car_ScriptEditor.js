@CustomEditor (Computer_Car_Script)
class Computer_Car_ScriptEditor extends Editor {

function OnInspectorGUI () {
GUILayout.Label("Position package:");
GUILayout.Label("computer car script");
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("Number of position sensors:");
GUILayout.Label("(look at the largest number in the");
GUILayout.Label("children of the storage object)");
target.numberofpositions = EditorGUILayout.FloatField("", target.numberofpositions);
GUILayout.Label("");
GUILayout.Label("Lap to start on:");
target.currentlap = EditorGUILayout.FloatField("", target.currentlap);
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("This creates a texture above the car");
GUILayout.Label("showing it's position to the player");
target.textureEnabled = EditorGUILayout.Toggle("Texture Enabled?",target.textureEnabled);
if(target.textureEnabled == true) {
GUILayout.Label("");
GUILayout.Label("This is the object the texture will be");
GUILayout.Label("on. It should be a child of the car object:");
target.objecttochangetexture = EditorGUILayout.ObjectField("",target.objecttochangetexture, GameObject, true);
GUILayout.Label("");
GUILayout.Label("These are the materials which will be");
GUILayout.Label("applied:");


target.ElementsExpand = EditorGUILayout.Foldout(target.ElementsExpand, "Position Materials");
if(target.ElementsExpand) {
    var x : int = 0;    
    target.ElementsSize = EditorGUILayout.IntField("Size", target.ElementsSize);    
    if(target.positionTextures.length != target.ElementsSize) {        
    var newArray : Material[] = new Material[target.ElementsSize];       
    for(x = 0; x < target.ElementsSize; x++) {            
    if(target.positionTextures.length > x) {                
    newArray[x] = target.positionTextures[x];            
    }        
    }        
    target.positionTextures = newArray;    
    }    
    for(x = 0; x < target.positionTextures.length; x++) {        
    target.positionTextures[x] = EditorGUILayout.ObjectField(""+(x+1)+" st/nd/rd/etc", target.positionTextures[x], typeof(Material));    
    }
}
}
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("Player's Car:");
target.playercar = EditorGUILayout.ObjectField("",target.playercar, GameObject, true);
GUILayout.Label("");
GUILayout.Label("This is an important array of other");
GUILayout.Label("computer cars, check it carefully.");
GUILayout.Label("It should not contain this car.");

target.othercomputercars_ElementsExpand = EditorGUILayout.Foldout(target.othercomputercars_ElementsExpand, "Other computer cars");
if(target.othercomputercars_ElementsExpand) {
    var y : int = 0;    
    target.othercomputercars_ElementsSize = EditorGUILayout.IntField("Size", target.othercomputercars_ElementsSize);    
    if(target.othercomputercars.length != target.othercomputercars_ElementsSize) {        
    var newArrayy : Computer_Car_Script[] = new Computer_Car_Script[target.othercomputercars_ElementsSize];       
    for(y = 0; y < target.othercomputercars_ElementsSize; y++) {            
    if(target.othercomputercars.length > y) {                
    newArrayy[y] = target.othercomputercars[y];            
    }        
    }        
    target.othercomputercars = newArrayy;    
    }    
    for(y = 0; y < target.othercomputercars.length; y++) {        
    target.othercomputercars[y] = EditorGUILayout.ObjectField("car "+y, target.othercomputercars[y], typeof(Computer_Car_Script));    
    }
}


GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("Look at the demo or pdf if you don't know");
GUILayout.Label("what to fill in, or send a contact form");
GUILayout.Label("on our website.");

        if (GUI.changed)
            EditorUtility.SetDirty (target);
}

}