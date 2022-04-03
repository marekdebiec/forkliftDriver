@CustomEditor (lap_script)
class lap_scriptEditor extends Editor {

function OnInspectorGUI () {
GUILayout.Label("Position package:");
GUILayout.Label("lap system script");
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("Player car script:");
target.PlayerCar = EditorGUILayout.ObjectField("",target.PlayerCar, player_pos_gui, true);
GUILayout.Label("");
GUILayout.Label("Number of laps in race:");
target.numberOfLaps = EditorGUILayout.FloatField("", target.numberOfLaps);
GUILayout.Label("");
GUILayout.Label("GUI text displaying lap");
target.lapDisplay = EditorGUILayout.ObjectField("",target.lapDisplay, GUIText, true);
GUILayout.Label("Any gui text in your scene will do.");
GUILayout.Label("Feel free to change the font etc");
GUILayout.Label("This will display the lap number like");
GUILayout.Label("this e.g. '1/3'");
GUILayout.Label("");
GUILayout.Label("When the player's car has finished");
GUILayout.Label("the text will change to the word");
GUILayout.Label("'Finsihed'. To make sure it still");
GUILayout.Label("fits on the screen, the font size");
GUILayout.Label("will change to this:");
target.finishedFontSize = EditorGUILayout.FloatField("", target.finishedFontSize);
GUILayout.Label("");
GUILayout.Label("If you would like to make something");
GUILayout.Label("happen at the end of the race, use");
GUILayout.Label("a script from the EndOfRaceScripts");
GUILayout.Label("folder or search for:");
GUILayout.Label("GeneralEndOfRace");
GUILayout.Label("If you are using a C# version of this");
GUILayout.Label("script, tick the toggle bellow:");
target.useCs = EditorGUILayout.Toggle("Use C#", target.useCs);
if (target.useCs == true) {
GUILayout.Label("Drag the object here which has the");
GUILayout.Label("c# script applied:");
target.CsObject = EditorGUILayout.ObjectField("",target.CsObject, GameObject, true);
}
GUILayout.Label("If you are using the javascript");
GUILayout.Label("version, you do not need to do");
GUILayout.Label("this. The script should work out");
GUILayout.Label("of the box.");
GUILayout.Label("You can edit this script to change");
GUILayout.Label("what happens at the end of the race,");
GUILayout.Label("but it is easier if you call a function");
GUILayout.Label("in another script, as your variables");
GUILayout.Label("will not show up here, because this is");
GUILayout.Label("being controlled by a seperate editor");
GUILayout.Label("script.");
GUILayout.Label("");
GUILayout.Label("");
GUILayout.Label("Look at the demo or pdf if you don't know");
GUILayout.Label("what to fill in, or send a contact form");
GUILayout.Label("on our website.");

        if (GUI.changed)
            EditorUtility.SetDirty (target);
}

}