status = "";
music1 = "";
music2 = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
leftWristscore = 0;


function preload()
{
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(550,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("Posenet is intialized");
}
function gotPoses(results)
{
 if(results > 0 )
 {
     leftwristX = results[0].pose.leftWrist.x;
     leftwristY = results[0].pose.leftWrist.y;
     console.log("leftwrist x = ") + leftwristX + "leftwrist y = " + leftwristY;
     leftWristscore = results[0].pose.keypoints[9].score;

     rightwristX = results[0].pose.rightWrist.x;
     rightwristY = results[0].pose.righttWrist.y;
     console.log("rightwrist x = ") + rightwristX + "rightwrist y = " + rightwristY;
      
 }
}
function draw()
{
    image(video, 0, 0,550, 650);
  
    music1isplaying = music1.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
    if(leftWristscore > 0.2)
    {
        circle(leftwristX, leftwristY, 20);
        music2.stop();

        if(music1isplaying = false)
        {
           music1.play();
           document.getElementById("song").innerHTML = "song1";
        }
    }
}