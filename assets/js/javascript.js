$(document).ready(function() {




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAhzWu9fvH6QLiXUOIuA-LNT1kH2ZOf3AQ",
    authDomain: "trainscheduler-50591.firebaseapp.com",
    databaseURL: "https://trainscheduler-50591.firebaseio.com",
    projectId: "trainscheduler-50591",
    storageBucket: "",
    messagingSenderId: "136523796038"
  };
  firebase.initializeApp(config);


  //This puts stuff into firebase
  $("#submit-button").on("click", function(event) {
  	event.preventDefault();

  	var trainName = $("#train-name-input").val();
  	var destinationName = $("#destination-input").val();
  	var firstTrainTime = $("#first-train-input").val();
  	var frequencyMinutes = $("#frequency-input").val();

  	firebase.database().ref().push({
  		trainNameDB: trainName,
  		destinationNameDB: destinationName,
  		firstTrainTimeDB: firstTrainTime,
  		frequencyMinutesDB: frequencyMinutes
  	});

  });


  

// This adds firebase stuff automatically into the table when the page loads or somebody adds something.
  firebase.database().ref().on("child_added", function(childSnapshot) {
  	console.log(childSnapshot);

  	var trainScheduleInFirebase = JSON.stringify(childSnapshot);
    var trainScheduleParse = JSON.parse(trainScheduleInFirebase);
  	console.log(trainScheduleInFirebase);
  	console.log(trainScheduleParse);
    console.log(trainScheduleParse.trainNameDB);

    var now = moment().format("LT");
   /* var nowPlus = now.clone().add(trainScheduleParse.frequencyMinutesDB, "m")
    var nextTrainDisplay = nowPlus.format("h:mm");
    //var untilNextTrain = nowPlus.add(now, "m").format("mm");*/
    console.log(now);
    //console.log(nowPlus);
    //console.log(nextTrainDisplay);
    //console.log(untilNextTrain);
   // var firstTrainCalc = trainScheduleParse.firstTrainTimeDB.format("h:mm")
    //console.log(firstTrainCalc);
  	/*var newRow = $("<tr>");
  	var newCell = $("<td>");*/
  	/*$("#mainTableBody").append("<tr><td>" + trainScheduleParse.trainNameDB + "</td><td>" +
     trainScheduleParse.destinationNameDB + "</td><td>" + trainScheduleParse.frequencyMinutesDB + "</td><td>" + nextTrainDisplay + "</td>");*/
  	//for (var i = firstTrainCalc; i >= 24; firstTrainCalc + trainScheduleParse.frequencyMinutesDB) {
      
   // }

  });
}); 