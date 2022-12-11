facts=["This will take a while", "The webcam sees all!", "This is totally not an error message...", "Smile!", "Laugh two times a day (or two hundred...)", "I don't know", "Loading usually takes about 17 decades to complete"];
document.getElementById("result-lbl").innerHTML="Loading... did you know? "+facts[Math.floor(Math.random() * 7)];
function setup() {
    canvas=createCanvas(500, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("MobileNet", modelLoaded())
    console.log("ps5 elements loaded");
}
function modelLoaded() {
    console.log("Model Extracted");
}
function draw() {
    image(video, 0, 0, 500, 400);
    classifier.classify(video, gotResult);
}
result="";
function gotResult(error, results) {
    if(error) {
        console.error("Error detected at checkpoint js18: "+error);
    }
    else {
        if ((results[0].confidence > 0.5) && (result != results[0].label)) {
            result=results[0].label;
            document.getElementById("result-lbl").innerHTML=results[0].label;
        }
    }
}