
song="";
function setup() {
    canvas = createCanvas(500,500);
    canvas.position(430,200);
    video = createCapture(VIDEO);
    video.hide(); 
}
function preload() {
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}
function draw() {
    image(video,0,0,500,500);
}