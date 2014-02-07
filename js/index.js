var member=false;
var tries=3;
var woType;
var woTypeDelay;
var time_setA=0;
var time_setB=0;
var time_setC=0;
var workoutA_interval;
var workoutB_interval;
var workoutC_interval;
var restA;
var restB;
var restC;
var clickSound = new Audio('');
	localStorage.setItem("soundState", "Off");


	
function sound(){
if(localStorage.getItem("soundState") == "On"){
localStorage.setItem("soundState", "Off");
console.log("soundState Off");
clickSound = new Audio('');
document.getElementById("test").src = "images/off.png"

}else if(localStorage.getItem("soundState") == "Off"){
localStorage.setItem("soundState", "On");
console.log("soundState On");
clickSound = new Audio('sound/ding.mp3');
document.getElementById("test").src = "images/on.png"
clickSound.play();
}
}


function goBack()
	  {
	  window.history.back()
	  }
	  
function calculateBmiMetric() {
		var weight = document.bmiFormMetric.weight.value
		var height = document.bmiFormMetric.height.value
		if(weight > 0 && height > 0){	
		var finalBmi = weight/(height/100*height/100)
		document.bmiFormMetric.bmi.value = finalBmi.toFixed(2)
		if(finalBmi < 18.5){
		document.bmiFormMetric.meaning.value = "You are Underweight."
		}
		if(finalBmi > 18.5 && finalBmi < 25){
		document.bmiFormMetric.meaning.value = "You are Normal."
		}
		if(finalBmi >= 25 && finalBmi < 30){
		document.bmiFormMetric.meaning.value = "You are Overweight."
		}
		if(finalBmi >= 30){
		document.bmiFormMetric.meaning.value = "You are Obese."
		}
		}
		else{
		document.bmiFormMetric.bmi.value = "Please Specify your Weight/Height."
		document.bmiFormMetric.meaning.value = "Please Specify your Weight/Height."
		}
		}

		
function calculateBmiStandard() {
		var weight = document.bmiFormStandard.weight.value
		var height = (parseInt(document.bmiFormStandard.heightFT.value)+(parseInt(document.bmiFormStandard.heightIN.value)/12))
		if(weight > 0 && height > 0){	
		var finalBmi = (weight*4.88/(height*height))
		document.bmiFormStandard.bmi.value = finalBmi.toFixed(2)
		if(finalBmi < 18.5){
		document.bmiFormStandard.meaning.value = "You are Underweight."
		}
		if(finalBmi > 18.5 && finalBmi < 25){
		document.bmiFormStandard.meaning.value = "You are Normal."
		}
		if(finalBmi >= 25 && finalBmi < 30){
		document.bmiFormStandard.meaning.value = "You are Overweight."
		}
		if(finalBmi >= 30){
		document.bmiFormStandard.meaning.value = "You are Obese."
		}
		}
		else{
		document.bmiFormStandard.bmi.value = "Please Specify your Weight/Height."
		document.bmiFormStandard.meaning.value = "Please Specify your Weight/Height."
		}
		}

function valid(f) {
!(/^[A-z;0-9]*$/i).test(f.value)?f.value = f.value.replace(/[^A-z;0-9]/ig,''):null;
} 

function woEnd(){
	clearTimeout(intro);
	clearInterval(workoutA_interval);
	clearInterval(workoutB_interval);
	clearInterval(workoutC_interval);
	clearInterval(restA);
	clearInterval(restB);
	clearInterval(restC);
	totalReps=parseInt(time_setA)+parseInt(time_setB)+parseInt(time_setC);
				document.getElementById("word_finish").innerHTML = "Good job you successfully finished "+woType;
				document.getElementById("word_setA").innerHTML ="set A: "+time_setA;
				document.getElementById("word_setB").innerHTML ="set B: "+time_setB;
				document.getElementById("word_setC").innerHTML ="set C: "+time_setC;
				document.getElementById("word_Reps").innerHTML ="Total Reps: "+totalReps;
				time_setA=0;
				time_setB=0;
				time_setC=0;
		//continue
				window.location='#pgAnimationEnd';
	}


function setA(){
workoutA_interval = setInterval(function(){
			if(time_setA>=document.getElementById('txt_setA').value){
				clickSound.play();
				clearInterval(workoutA_interval);
				document.getElementById("gifAnimation").src = "images/gif/Rest.gif";
							restTime = localStorage.getItem("fld_rest");
							restA = setInterval(function(){
										if(document.getElementById("txt_rest").value <= 0){ clearInterval(restA);
											clickSound.play();
											document.getElementById("txt_rest").value = localStorage.getItem("fld_rest");
											document.getElementById('wo_rest').innerHTML = document.getElementById("txt_rest").value ;
														setB();
										
										}
										else{
										document.getElementById("txt_rest").value -= 1;
										document.getElementById('wo_rest').innerHTML = document.getElementById("txt_rest").value ;
										console.log("rest -1");
										}
							}, 1000);
							
										}

			else{
			if(localStorage.getItem("soundState") == "On"){
				var tockSound = new Audio('sound/tick.wav');
				tockSound.play();
				var repsTotal = parseInt(localStorage.getItem(document.getElementById("headerAnimation").innerHTML));
				localStorage.setItem(document.getElementById("headerAnimation").innerHTML,repsTotal+1);
				console.log(document.getElementById("headerAnimation").innerHTML +"+1");
				document.getElementById(woData).innerHTML = localStorage.getItem(document.getElementById("headerAnimation").innerHTML);
				time_setA+=1;
				document.getElementById("gifAnimation").src = "images/gif/"+woType+".gif";
				document.getElementById("wo_setA").innerHTML = time_setA+" / "+document.getElementById("txt_setA").value;
				console.log("setA+1");
			}
			else{
			var repsTotal = parseInt(localStorage.getItem(document.getElementById("headerAnimation").innerHTML));
				localStorage.setItem(document.getElementById("headerAnimation").innerHTML,repsTotal+1);
				console.log(document.getElementById("headerAnimation").innerHTML +"+1");
				document.getElementById(woData).innerHTML = localStorage.getItem(document.getElementById("headerAnimation").innerHTML);
			time_setA+=1;
			document.getElementById("gifAnimation").src = "images/gif/"+woType+".gif";
			document.getElementById("wo_setA").innerHTML = time_setA+" / "+document.getElementById("txt_setA").value;
			console.log("setA+1");
			}
			}
		}, woTypeDelay);

}	

function setB(){
workoutB_interval = setInterval(function(){
			if(time_setB>=document.getElementById('txt_setB').value){
				clickSound.play();
				clearInterval(workoutB_interval);
				document.getElementById("gifAnimation").src = "images/gif/Rest.gif";
							restB = setInterval(function(){
										if(document.getElementById("txt_rest").value  <= 0){ clearInterval(restB);
										clickSound.play();
										document.getElementById("txt_rest").value = localStorage.getItem("fld_rest");
											document.getElementById('wo_rest').innerHTML = document.getElementById("txt_rest").value ;
														setC();
										}
										else{
										document.getElementById("txt_rest").value -= 1;
										document.getElementById('wo_rest').innerHTML = document.getElementById("txt_rest").value ;
										console.log("rest -1");
										}
							}, 1000);
							
										}

			else{
			if(localStorage.getItem("soundState") == "On"){
				var tockSound = new Audio('sound/tick.wav');
				tockSound.play();
				var repsTotal = parseInt(localStorage.getItem(document.getElementById("headerAnimation").innerHTML));
				localStorage.setItem(document.getElementById("headerAnimation").innerHTML,repsTotal+1);
				console.log(document.getElementById("headerAnimation").innerHTML +"+1");
				document.getElementById(woData).innerHTML = localStorage.getItem(document.getElementById("headerAnimation").innerHTML);
				time_setB+=1;
				document.getElementById("gifAnimation").src = "images/gif/"+woType+".gif";
				document.getElementById("wo_setB").innerHTML = time_setB+" / "+document.getElementById("txt_setB").value;
				console.log("setB+1");
			}
			else{
			var repsTotal = parseInt(localStorage.getItem(document.getElementById("headerAnimation").innerHTML));
				localStorage.setItem(document.getElementById("headerAnimation").innerHTML,repsTotal+1);
				console.log(document.getElementById("headerAnimation").innerHTML +"+1");
				document.getElementById(woData).innerHTML = localStorage.getItem(document.getElementById("headerAnimation").innerHTML);
			time_setB+=1;
			document.getElementById("gifAnimation").src = "images/gif/"+woType+".gif";
			document.getElementById("wo_setB").innerHTML = time_setB+" / "+document.getElementById("txt_setB").value;
			console.log("setB+1");
			}
			}
		}, woTypeDelay);

}

function setC(){
workoutC_interval = setInterval(function(){
			if(time_setC>=document.getElementById('txt_setC').value){
			
				if(localStorage.getItem("soundState") == "On"){
				document.getElementById("endWO").enabled==true;
				clickSound.play();
				clearInterval(workoutC_interval);
				totalReps=parseInt(localStorage.getItem("fld_setA"))+parseInt(localStorage.getItem("fld_setB"))+parseInt(localStorage.getItem("fld_setC"));
				document.getElementById("word_finish").innerHTML = "Good job you successfully finished "+woType;
				document.getElementById("word_setA").innerHTML ="set A: "+localStorage.getItem("fld_setA");
				document.getElementById("word_setB").innerHTML ="set B: "+localStorage.getItem("fld_setB");
				document.getElementById("word_setC").innerHTML ="set C: "+localStorage.getItem("fld_setC");
				document.getElementById("word_Reps").innerHTML ="Total Reps: "+totalReps;
				time_setA=0;
				time_setB=0;
				time_setC=0;
		//continue
				window.location='#pgAnimationEnd';
			}
			else{
				clearInterval(workoutC_interval);
				totalReps=parseInt(time_setA)+parseInt(time_setB)+parseInt(time_setC);
				document.getElementById("word_finish").innerHTML = "Good job you successfully finished "+woType;
				document.getElementById("word_setA").innerHTML ="set A: "+time_setA;
				document.getElementById("word_setB").innerHTML ="set B: "+time_setB;
				document.getElementById("word_setC").innerHTML ="set C: "+time_setC;
				document.getElementById("word_Reps").innerHTML ="Total Reps: "+totalReps;
				time_setA=0;
				time_setB=0;
				time_setC=0;
				
		//continue
				window.location='#pgAnimationEnd';
			}
			}

			else{
			if(localStorage.getItem("soundState") == "On"){
				var tockSound = new Audio('sound/tick.wav');
				tockSound.play();
				var repsTotal = parseInt(localStorage.getItem(document.getElementById("headerAnimation").innerHTML));
				localStorage.setItem(document.getElementById("headerAnimation").innerHTML,repsTotal+1);
				console.log(document.getElementById("headerAnimation").innerHTML +"+1");
				document.getElementById(woData).innerHTML = localStorage.getItem(document.getElementById("headerAnimation").innerHTML);
				time_setC+=1;
				document.getElementById("gifAnimation").src = "images/gif/"+woType+".gif";
				document.getElementById("wo_setC").innerHTML = time_setC+" / "+document.getElementById("txt_setC").value;
				console.log("setC+1");
			}
			else{
			var repsTotal = parseInt(localStorage.getItem(document.getElementById("headerAnimation").innerHTML));
				localStorage.setItem(document.getElementById("headerAnimation").innerHTML,repsTotal+1);
				console.log(document.getElementById("headerAnimation").innerHTML +"+1");
				document.getElementById(woData).innerHTML = localStorage.getItem(document.getElementById("headerAnimation").innerHTML);
			time_setC+=1;
			document.getElementById("gifAnimation").src = "images/gif/"+woType+".gif";
			document.getElementById("wo_setC").innerHTML = time_setC+" / "+document.getElementById("txt_setC").value;
			console.log("setC+1");
			}
			}
		}, woTypeDelay);

}



	function play(){
	if(localStorage.getItem("soundState") == "On"){
	var GetReadySound = new Audio('sound/GetReady.wav');
			GetReadySound.play();
			
		}
	else{
	}
	intro=setTimeout(function(){
	clickSound.play();
	var repsTotal = parseInt(localStorage.getItem(document.getElementById("headerAnimation").innerHTML));
				localStorage.setItem(document.getElementById("headerAnimation").innerHTML,repsTotal+1);
				console.log(document.getElementById("headerAnimation").innerHTML +"+1");
				document.getElementById(woData).innerHTML = localStorage.getItem(document.getElementById("headerAnimation").innerHTML);
		time_setA+=1;
		document.getElementById("wo_setA").innerHTML = time_setA+" / "+document.getElementById("txt_setA").value;
		document.getElementById("gifAnimation").src = "images/gif/"+woType+".gif";
			
			setA();
		

	
	}, 10000);
	

	document.getElementById("gifAnimation").src = "images/gif/Opening.gif";
	document.getElementById("wo_setA").innerHTML = time_setA+" / "+document.getElementById("txt_setA").value;
	localStorage.setItem("fld_setA", document.getElementById('txt_setA').value);
		console.log("Workout setA: "+localStorage.getItem("fld_setA")+" Data Successfully Saved");
		
	document.getElementById("wo_setB").innerHTML = time_setB+" / "+document.getElementById("txt_setB").value;
	localStorage.setItem("fld_setB", document.getElementById('txt_setB').value);
		console.log("Workout setB: "+localStorage.getItem("fld_setB")+" Data Successfully Saved");
		
	document.getElementById("wo_setC").innerHTML = time_setC+" / "+document.getElementById("txt_setC").value;
	localStorage.setItem("fld_setC", document.getElementById('txt_setC').value);
		console.log("Workout setC: "+localStorage.getItem("fld_setC")+" Data Successfully Saved");
		
	document.getElementById("wo_rest").innerHTML = document.getElementById("txt_rest").value;
	localStorage.setItem("fld_rest", document.getElementById('txt_rest').value);
		console.log("Workout Rest: "+localStorage.getItem("fld_rest")+" Data Successfully Saved");
	}
	
	function getData(){	
			localStorage.getItem("fldLoggedIn");
				console.log("Logged In Data ("+localStorage.getItem("fldLoggedIn")+") Successfully Loaded");
			localStorage.getItem("UserLoggedIn");
				console.log("Logged in as "+localStorage.getItem("UserLoggedIn"));
			localStorage.getItem("fld_setA");
				console.log("Workout setA: "+localStorage.getItem("fld_setA")+" Data Successfully Loaded");
			localStorage.getItem("fld_setB");
				console.log("Workout setB: "+localStorage.getItem("fld_setB")+" Data Successfully Loaded");
			localStorage.getItem("fld_setC");
				console.log("Workout setC: "+localStorage.getItem("fld_setC")+" Data Successfully Loaded");	
			localStorage.getItem("fld_rest");
				console.log("Workout Rest: "+localStorage.getItem("fld_rest")+" Data Successfully Loaded");	
			
			
			document.getElementById('txt_setA').value = localStorage.getItem("fld_setA");
			document.getElementById('txt_setB').value = localStorage.getItem("fld_setB");
			document.getElementById('txt_setC').value = localStorage.getItem("fld_setC");
			document.getElementById('txt_rest').value = localStorage.getItem("fld_rest");
			document.getElementById('up_username').innerHTML = "Logged in as "+localStorage.getItem("UserLoggedIn");
			
			document.getElementById("dataDumbbellBicepsCurl").innerHTML = localStorage.getItem("Dumbbell Biceps Curl");
			document.getElementById("dataDumbbellSideRaise").innerHTML = localStorage.getItem("Dumbbell Side Raise");
			document.getElementById("dataDumbbellWristCurl").innerHTML = localStorage.getItem("Dumbbell Wrist Curl");
			document.getElementById("dataBenchPressBarbell").innerHTML = localStorage.getItem("Bench Press, Barbell");
			document.getElementById("dataCrunch").innerHTML = localStorage.getItem("Crunch");

			
			if(localStorage.getItem("Dumbbell Biceps Curl")==null){
			localStorage.setItem("Dumbbell Biceps Curl",0);
			console.log("Dumbbell Biceps Curl: "+localStorage.getItem("Dumbbell Biceps Curl"));	
			}
			else{
			localStorage.getItem("Dumbbell Biceps Curl");
			console.log("Dumbbell Biceps Curl: "+localStorage.getItem("Dumbbell Biceps Curl")+" Data Successfully Loaded");
			}
			
			if(localStorage.getItem("Dumbbell Side Raise")==null){
			localStorage.setItem("Dumbbell Side Raise",0);
			console.log("Dumbbell Side Raise: "+localStorage.getItem("Dumbbell Side Raise"));	
			}
			else{
			localStorage.getItem("Dumbbell Side Raise");
			console.log("Dumbbell Side Raise: "+localStorage.getItem("Dumbbell Side Raise")+" Data Successfully Loaded");
			}
			
			if(localStorage.getItem("Dumbbell Wrist Curl")==null){
			localStorage.setItem("Dumbbell Wrist Curl",0);
			console.log("Dumbbell Wrist Curl: "+localStorage.getItem("Dumbbell Wrist Curl"));	
			}
			else{
			localStorage.getItem("Dumbbell Wrist Curl");
			console.log("Dumbbell Wrist Curl: "+localStorage.getItem("Dumbbell Wrist Curl")+" Data Successfully Loaded");
			}
			
			if(localStorage.getItem("Bench Press, Barbell")==null){
			localStorage.setItem("Bench Press, Barbell",0);
			console.log("Bench Press, Barbell: "+localStorage.getItem("Bench Press, Barbell"));	
			}
			else{
			localStorage.getItem("Bench Press, Barbell");
			console.log("Bench Press, Barbell: "+localStorage.getItem("Bench Press, Barbell")+" Data Successfully Loaded");
			}
			
			if(localStorage.getItem("Crunch")==null){
			localStorage.setItem("Crunch",0);
			console.log("Crunch: "+localStorage.getItem("Crunch"));	
			}
			else{
			localStorage.getItem("Crunch");
			console.log("Crunch: "+localStorage.getItem("Crunch")+" Data Successfully Loaded");
			}
		
			
			localStorage.getItem("soundState");
				console.log("Sound State = "+localStorage.getItem("soundState"));
			
			if(localStorage.getItem("soundState") == "On"){
			localStorage.setItem("soundState", "Off");
			console.log("soundState Off");
			clickSound = new Audio('');
			document.getElementById("test").src = "images/off.png"

			}else if(localStorage.getItem("soundState") == "Off"){
			localStorage.setItem("soundState", "On");
			console.log("soundState On");
			clickSound = new Audio('sound/ding.mp3');
			document.getElementById("test").src = "images/on.png"
			}
			
			}
				
	function LoggedInValidate(){
		if(localStorage.getItem("fldLoggedIn")=="true"){
		window.location = '#main';
		}
		else
		{
		window.location = '#popupLogin';
		}
	
	}
	
	function btnLogOut(){
	localStorage.setItem("fldLoggedIn","false");
		document.getElementById("imgOpening").src = "images/gif/ems-opening-gif.gif";
		console.log("User Logged Out");
	}
	
	function clrData(){
	localStorage.setItem("fldLoggedIn","false");
		console.log("User Logged Out");
		
		localStorage.setItem("Dumbbell Biceps Curl",0);
		localStorage.setItem("Dumbbell Side Raise",0);
		localStorage.setItem("Dumbbell Wrist Curl",0);
		localStorage.setItem("Bench Press, Barbell",0);
		localStorage.setItem("Crunch",0);
		
			document.getElementById("dataDumbbellBicepsCurl").innerHTML = localStorage.getItem("Dumbbell Biceps Curl");
			document.getElementById("dataDumbbellSideRaise").innerHTML = localStorage.getItem("Dumbbell Side Raise");
			document.getElementById("dataDumbbellWristCurl").innerHTML = localStorage.getItem("Dumbbell Wrist Curl");
			document.getElementById("dataBenchPressBarbell").innerHTML = localStorage.getItem("Bench Press, Barbell");
			document.getElementById("dataCrunch").innerHTML = localStorage.getItem("Crunch");
			
		console.log("Data has been reset");
	}
	
//Opening = 10 sec
//Dumbbell Biceps Curl = 6.4 sec
function wo_DumbbellBicepsCurl(){
woType="Dumbbell Biceps Curl";
woTypeDelay="6400";
woData="dataDumbbellBicepsCurl";
document.getElementById("headerAnimation").innerHTML = woType;
}


//Bench Press, Barbell = 3.2 sec
function wo_BarbellBenchPress(){
woType="Bench Press, Barbell";
woTypeDelay="3200";
woData="dataBenchPressBarbell";
document.getElementById("headerAnimation").innerHTML = woType;
}
//Dumbbell Side Raise = 4.3 sec
function wo_DumbbellSideRaise(){
woType="Dumbbell Side Raise";
woTypeDelay="4300";
woData="dataDumbbellSideRaise";
document.getElementById("headerAnimation").innerHTML = woType;
}
//Dumbbell Wrist Curl = 3 sec
function wo_DumbbellWristCurl(){
woType="Dumbbell Wrist Curl";
woTypeDelay="3000";
woData="dataDumbbellWristCurl";
document.getElementById("headerAnimation").innerHTML = woType;
}
//Crunch = 5 sec
function wo_Crunch(){
woType="Crunch";
woTypeDelay="5000";
woData="dataCrunch";
document.getElementById("headerAnimation").innerHTML = woType;
}