#pragma strict

var lastX:float; // this will store the last position of the character
var isMoving:boolean = false; //flags whether or not the player is in motion.
var explosion:GameObject;
var catchSound: AudioClip;
var explosionSound:AudioClip;



function Start () {
animation.Stop(); //this will stop unity from playing the default animation.
}

function Update () {
	var halfW:float = Screen.width/2;
	transform.position.x = Input.mousePosition.x/25;
	
	if (lastX != transform.position.x)
	{
		if(!isMoving)
		{
			// the player is standing still
			isMoving = true;
				if(!animation.IsPlaying("Catch")){
				animation.Play("Step");
				}
		}	
	}
	else
	{
		if(isMoving)
		{
			isMoving = false;
				if(!animation.IsPlaying("Catch")){
					animation.Play("Idle");
				}
		}
	}
	lastX = transform.position.x;
}

function OnCollisionEnter(col: Collision)
{
	if(col.gameObject.tag == "bomb")
	{
		Instantiate(explosion, col.gameObject.transform.position, Quaternion.identity);
		audio.PlayOneShot(explosionSound);
		Debug.Log("Got hit!!!!"); // i got hit by a bomb
	}
	else if(col.gameObject.tag == "stein")
	{
		audio.PlayOneShot(catchSound);
		animation.Play("Catch"); // imma catch that stein
	}
	col.gameObject.transform.position.y = 50;
	col.gameObject.transform.position.x = Random.Range(0,60);
}