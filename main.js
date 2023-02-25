status ="";
object_name ="";

function setup(){
    canvas =createCanvas(650, 389);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
    document.getElementById("object_name").innerHTML = object_name;
}

function modelLoaded(){
    console.log("Model Loaded");
    status =true;
}

function draw(){
    image(video, 0, 0, 650, 389);
}