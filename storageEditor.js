@CustomEditor (storage)
class storageEditor extends Editor {

function OnInspectorGUI () {
GUILayout.Label("Position package:");
GUILayout.Label("storage script");
GUILayout.Label("");

GUILayout.Label("");
GUILayout.Label("Player car game object:");
target.playercar = EditorGUILayout.ObjectField("",target.playercar, GameObject, true);
GUILayout.Label("Player car script:");
target.playercarscript = EditorGUILayout.ObjectField("",target.playercarscript, player_pos_gui, true);
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("This is important, please check it carefully:");
target.allcomputercars_ElementsExpand = EditorGUILayout.Foldout(target.allcomputercars_ElementsExpand, "Computer cars");
if(target.allcomputercars_ElementsExpand) {
    var y : int = 0;    
    target.allcomputercars_ElementsSize = EditorGUILayout.IntField("Size", target.allcomputercars_ElementsSize);    
    if(target.allcomputercars.length != target.allcomputercars_ElementsSize) {        
    var newArrayy : Computer_Car_Script[] = new Computer_Car_Script[target.allcomputercars_ElementsSize];       
    for(y = 0; y < target.allcomputercars_ElementsSize; y++) {            
    if(target.allcomputercars.length > y) {                
    newArrayy[y] = target.allcomputercars[y];            
    }        
    }        
    target.allcomputercars = newArrayy;    
    }    
    for(y = 0; y < target.allcomputercars.length; y++) {        
    target.allcomputercars[y] = EditorGUILayout.ObjectField("car "+y, target.allcomputercars[y], typeof(Computer_Car_Script));    
    }
}
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("If the editor crashes, try changing this,");
GUILayout.Label("otherwise DO NOT TOUCH IT:");
target.part = EditorGUILayout.FloatField("", target.part);
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("Look at the demo or pdf if you don't know");
GUILayout.Label("what to fill in, or send a contact form");
GUILayout.Label("on our website.");

        if (GUI.changed)
            EditorUtility.SetDirty (target);
}

}