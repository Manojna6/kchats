status = "";
objects = [];
function preload() {
    image = loadImage("livingroom.jpg")
}
function setup() {
    canvas = createCanvas(504, 672);
    canvas.center();
    model = ml5.objectDetector("cocossd",modelloaded);
    status = "Detecting Objects";
}
function draw() {
    if(status != ""){
        for (let i = 0; i < objects.length; i++) {
            const element = objects[i];
            rect(element.x,element.y,element.height,element.width);
            noFill();
            text(element.label,element.x + 3,element.y + 15);
            percent = floor(element.confidence * 100)
            text(percent + "%",element.x + 3, element.y + 30)
        }
    }
}
function modelloaded() {
    status = true;
    console.log("model is loaded");
    model.detect(image,results);
}
function results(error, results) {
    console.log(results);
    objects = results;
}