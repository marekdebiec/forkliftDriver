@CustomEditor (position_sensor)
class position_sensorEditor extends Editor {

function OnInspectorGUI () {
GUILayout.Label("Position package:");
GUILayout.Label("position sensor script");
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("This variable represents the object's");
GUILayout.Label("position around the track:");
target.positionnumber = EditorGUILayout.FloatField("", target.positionnumber);
GUILayout.Label("As you move around the track, selecting");
GUILayout.Label("the position objects, it should increase.");
GUILayout.Label("It should be 0 at the start and go around");
GUILayout.Label("to it's highest value at the end.");
GUILayout.Label("");
GUILayout.Label("If you have these objects in the wrong");
GUILayout.Label("order, you can either correct them manually");
GUILayout.Label("which may take time, or go back onto the");
GUILayout.Label("editor and click the 'Destroy All Sensors'");
GUILayout.Label("button and start again.");
GUILayout.Label("");
GUILayout.Label("DO NOT DELETE THESE OBJECTS IN THE");
GUILayout.Label("INSPECTOR/HIERARCHY!");

GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("Look at the demo or pdf if you don't know");
GUILayout.Label("what to fill in, or send a contact form");
GUILayout.Label("on our website.");
        if (GUI.changed)
            EditorUtility.SetDirty (target);
}

}