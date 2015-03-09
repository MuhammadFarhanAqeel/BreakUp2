

var isPaused:boolean;
var startTime:float; // in seconds
var timeRemaining:float; // in seconds
var percent:float;
var clockBG: Texture2D;
var clockFG: Texture2D;
var clockFGMaxWidth:float;
var customSkin: GUISkin;



function Start () 
{
	startTime = 5.0;	
	clockFGMaxWidth = clockFG.width;
}



function Update () {
	
		if(!isPaused)
		{	
			DoCountDown();	
		}

}


function DoCountDown()
{
	
		timeRemaining = startTime - Time.time;
		percent = timeRemaining/5 * 100;
		if(timeRemaining < 0)
		{
			timeRemaining = 0;
			isPaused = true;
			TimeIsUp();
		}
		ShowTime();

}


function PauseClock()
{
	isPaused = true;
}



function UnPauseClock()
{
	isPaused = false;
}



function ShowTime()
{
	var minutes:int;
	var seconds:int;
	var timeStr:String;

	minutes = timeRemaining / 60;
	seconds = timeRemaining % 60;
	timeStr = minutes.ToString() + ":";
	timeStr += seconds.ToString("D2");
	Debug.Log(timeStr);
}



function TimeIsUp()
{
	Debug.Log("Time is up!!!");
}




function OnGUI()
{
var newBarWidth:float = (percent/100)* clockFGMaxWidth; // width of the foreground;
var gap: float = 20; // a spacing variable to help us position the clock
GUI.BeginGroup(new Rect (Screen.width - clockBG.width - gap, gap,clockBG.width,clockBG.height));
GUI.DrawTexture(Rect(0,0,clockBG.width,clockBG.height),clockBG);
GUI.BeginGroup(new Rect(5,6,newBarWidth,clockFG.height));
GUI.DrawTexture(Rect(0,0,clockFG.width,clockFG.height),clockFG);
GUI.EndGroup();
GUI.EndGroup();
}


