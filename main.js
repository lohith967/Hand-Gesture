Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NWNL3y8yI/model.json",modelLoaded)
function modelLoaded(){
    console.log('model Loaded')
}


function speak(){
    var synth = window.speechSynthesis;
    speak_data_1="first pridiction is"+prediction1;
    speak_data_2="And second prediction is"+prediction2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
synth.speak(utterThis);
}
function check(){
    img = document.getElementById('capture image');
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction1 = results[0].label;
    speak();
    if(results[0].label=="super"){
        document.getElementById("update_emoji").innerHTML="&#128076;"
    }
    if(results[0].label=="victory"){
        document.getElementById("update_emoji").innerHTML="&#9996;"
    }
    if(results[0].label=="best"){
        document.getElementById("update_emoji").innerHTML="&#128077;"
    }

    if(results[1].label=="super"){
        document.getElementById("update_emoji").innerHTML="&#128076;"
    }
    if(results[1].label=="victory"){
        document.getElementById("update_emoji").innerHTML="&#9996;"
    }
    if(results[1].label=="best"){
        document.getElementById("update_emoji").innerHTML="&#128077;"
    }
}
}
