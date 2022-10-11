Webcam.set({
    width : 350,
    height: 350,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");

webcam.attatch("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'; });
    }





classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]' , modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
    }

