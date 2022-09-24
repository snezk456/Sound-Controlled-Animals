function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WRT8rCYYq/', modelReady);
}

function modelReddy(){
    classifier.classify(gotResults);
}
