var prefab: GameObject;
var speed:int;
var audioClips: AudioClip[];


function Start () {

}

function Update () {
transform.position.y -= speed* Time.deltaTime;
	if(transform.position.y< 0)
	{
		audio.PlayOneShot(audioClips[Random.Range(0,audioClips.Length)]);
		Instantiate(prefab,transform.position, Quaternion.identity);
		transform.position.y = 50;
		transform.position.x = Random.Range(0,50);
		transform.position.z = -16;
		
	}
}

