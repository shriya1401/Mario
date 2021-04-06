function preload() {
	world_start = loadSound("world_start.wav");
	jump_sound= loadSound("jump.wav");
	gameover_sound= loadSound("gameover.wav");
	kick_sound= loadSound("kick.wav");
	coin_sound= loadSound("coin.wav");
	mariodie_sound= loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent("game_console");

	poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
  }
  
  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	 
	}
  }

  

function draw() {
	game()

}






