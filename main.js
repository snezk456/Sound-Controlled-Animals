function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WRT8rCYYq/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice is of - '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'accuracy:'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img1 = document.getElementById('cat');
        img2 = document.getElementById('dog');
        img3 = document.getElementById('lion');
        img4 = document.getElementById('parrot');

        if (results[0].label == "Dog") {
            img.src = 'Dog.jpg';
        } else if (results[0].label == "Cat") {
            img.src = 'cat.jpg';
        } else if (results[0].label == "Parrot") {
            img.src = 'Parrot.jpg';
        } else if (results[0].label == "Lion") {
            img.src = 'Lion.jpg';
        } else{
            img.src = 'listen.gif';
        }
    }
}
