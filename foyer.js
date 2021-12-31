status = "";
objects = [];

function preload() {
    img = loadImage("foyer.jpg");
}
function setup() {
    canvas = createCanvas(504, 672);
    canvas.center();
    model = ml5.objectDetector("cocossd",modelloaded);
    status = "Detecting Objects";
}
function draw() {
    image(img, 0, 0, 504, 672)
    console.log(status);
    if(status == true){
        console.log(objects);
        for (let i = 0; i < objects.length; i++) {
            const element = objects[i];
            rect(element.x,element.y,element.width,element.height);
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
    model.detect(img,gotresult);
}
function gotresult(error, results) {
    console.log(results);
    objects = results;
}