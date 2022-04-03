@CustomEditor (player_pos_gui)
class player_pos_guiEditor extends Editor {

function OnInspectorGUI () {
GUILayout.Label("Position package:");
GUILayout.Label("player car script");
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("Fill this in:");
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
GUILayout.Label("GUI Stuff:");
GUILayout.Label("");
target.showgui = EditorGUILayout.Toggle("Show gui?",target.showgui);
if(target.showgui == true) {
GUILayout.Label("x coordinate of position gui:");
target.position_x = EditorGUILayout.FloatField("", target.position_x);
GUILayout.Label("y coordinate of position gui:");
target.position_y = EditorGUILayout.FloatField("", target.position_y);
GUILayout.Label("width of position gui:");
target.position_width = EditorGUILayout.FloatField("", target.position_width);
GUILayout.Label("height of position gui:");
target.position_height = EditorGUILayout.FloatField("", target.position_height);
GUILayout.Label("position gui textures:");
target.ElementsExpand = EditorGUILayout.Foldout(target.ElementsExpand, "Textures");
if(target.ElementsExpand) {
    var x : int = 0;    
    target.ElementsSize = EditorGUILayout.IntField("Size", target.ElementsSize);    
    if(target.PosTextures.length != target.ElementsSize) {        
    var newArray : Texture[] = new Texture[target.ElementsSize];       
    for(x = 0; x < target.ElementsSize; x++) {            
    if(target.PosTextures.length > x) {                
    newArray[x] = target.PosTextures[x];            
    }        
    }        
    target.PosTextures = newArray;    
    }    
    for(x = 0; x < target.PosTextures.length; x++) {        
    target.PosTextures[x] = EditorGUILayout.ObjectField(""+(x+1)+" st/nd/rd/etc", target.PosTextures[x], typeof(Texture));    
    }
}
}

GUILayout.Label("");
GUILayout.Label("Check this carefully:");
GUILayout.Label("List of computer cars:");
target.computercars_ElementsExpand = EditorGUILayout.Foldout(target.computercars_ElementsExpand, "Computer cars");
if(target.computercars_ElementsExpand) {
    var y : int = 0;    
    target.computercars_ElementsSize = EditorGUILayout.IntField("Size", target.computercars_ElementsSize);    
    if(target.computercars.length != target.computercars_ElementsSize) {        
    var newArrayy : Computer_Car_Script[] = new Computer_Car_Script[target.computercars_ElementsSize];       
    for(y = 0; y < target.computercars_ElementsSize; y++) {            
    if(target.computercars.length > y) {                
    newArrayy[y] = target.computercars[y];            
    }        
    }        
    target.computercars = newArrayy;    
    }    
    for(y = 0; y < target.computercars.length; y++) {        
    target.computercars[y] = EditorGUILayout.ObjectField("car "+y, target.computercars[y], typeof(Computer_Car_Script));    
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
