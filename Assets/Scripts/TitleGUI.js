
var customSkin: GUISkin;


function Start () {

}

function OnGUI () {

if(GUI.Button(Rect(Screen.width/2.3,Screen.height/1.5,200,100),"Play Game"))
{
	Debug.Log("You clicked me!!");
	Application.LoadLevel(1);
}

}