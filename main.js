leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song="";
function setup() {
    canvas = createCanvas(500,500);
    canvas.position(430,200);
    video = createCapture(VIDEO);
    video.hide(); 

    poseNet =  ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload() {
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}
function draw() {
    image(video,0,0,500,500);
}
function modelLoaded() {
    console.log('ModelLoaded');
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
       console.log("leftWristX =" + leftWristX,"leftWrisyY =" +leftWristY);

       rightWristX = results[0].pose.rightWrist.x;
       rightWristY = results[0].pose.rightWrist.y;
       console.log("rightWristX =" + rightWristX,"rightWrisyY =" + rightWristY);
    }
}