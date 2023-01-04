let progress = document.querySelector("#progress");
let start = document.getElementById("start");
let steps = document.querySelectorAll(".step");
let qst = document.getElementById("qst");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");
let submit = document.querySelectorAll('.choice');
let quiz = document.getElementById('quiz');
let home = document.getElementById('home');
let results = document.getElementById('results');
let currentscore = document.getElementById('score');
let highscore = document.getElementById('high-score');
let progresscounter = document.getElementById('progresscounter');

quiz.style.display = 'none';
results.style.display = 'none';

start.addEventListener('click', function() {
    quiz.style.display = 'block';
    home.style.display = 'none';
    results.style.display = 'none';
});

for (let i = 0; i < submit.length; i++) {
  submit[i].addEventListener('click',nextQst);
}

start.addEventListener("click",function() {
  stepper();
  nextQst(); 
});
let qstIndex = 0;
let qsts = [];

function displayQst(qstIndex){
  qst.innerHTML = qsts[qstIndex].qst;
  choice1.innerHTML = qsts[qstIndex].choice1;
  choice2.innerHTML = qsts[qstIndex].choice2;
  choice3.innerHTML = qsts[qstIndex].choice3;
  choice4.innerHTML = qsts[qstIndex].choice4;
}


function nextQst(){
  if(qstIndex < qsts.length){
    console.log(qstIndex);
    displayQst(qstIndex);
    progressupdate(qstIndex);
  }
  else{
    quiz.style.display = 'none';
    home.style.display = 'none';
    results.style.display = 'block';
    stepper();
    currentscore.innerHTML = score*10 + '%';
    answers();
  }
}
let choice;
let score = 0;
let incorrectAnswers = [];
let correctAnswers = [];
function answerSubmit(answer){
  if(answer == qsts[qstIndex].correct){
    score++;
    choice = "correct";

    let correctAnswer = {
      qst: qsts[qstIndex].qst,
      correctAnswer: qsts[qstIndex]["choice"+qsts[qstIndex].correct],
      explanation: qsts[qstIndex].explanation,
    };
    correctAnswers.push(correctAnswer);
  }
  else{
    choice = "incorrect";
    let incorrectAnswer = {
      qst: qsts[qstIndex].qst,
      correctAnswer: qsts[qstIndex]["choice"+qsts[qstIndex].correct],
      explanation: qsts[qstIndex].explanation,
    };
    incorrectAnswers.push(incorrectAnswer);
  }
  qstIndex++;
  console.log(choice);
}

function answers() {
  let result = document.querySelector(".resultsExplanation");
  for (let incorrectAnswer of incorrectAnswers) {
    result.innerHTML += '<div class="mb-3 border border-danger p-3 rounded bg-danger bg-opacity-25"><div>Q: '+incorrectAnswer.qst+'</div><div>A: '+incorrectAnswer.correctAnswer+'</div><div>Explanation: '+incorrectAnswer.explanation+'</div></div>';
  }
  for (let correctAnswer of correctAnswers) {
    result.innerHTML += '<div class="mb-3 border border-success p-3 rounded bg-success bg-opacity-25"><div>Q: '+correctAnswer.qst+'</div><div>A: '+correctAnswer.correctAnswer+'</div><div>Explanation: '+correctAnswer.explanation+'</div></div>';
  }
  
}

function update() {
  for (let i = 0; i<steps.length; i++) {
    let step = steps[i];
    if (i < current) { //checks whether the current case of the loop represents a step that has already been completed
      step.classList.add("active");
    }
  };

  let actives = document.querySelectorAll(".active");
  let width = (actives.length - 1 / steps.length - 1) * 40;
  progress.style.width = width + "%"; 
};

let current = 1;
function stepper(){
  current++;
  update();
}

function progressupdate(qstIndex){
  for (let i = 0; i<qsts.length; i++) {
    if (i < qstIndex+1) { //checks whether the current index of the loop represents a step that has already been completed
      let progresswidth = (i+1) * 7.5;
      progressbar.style.width = progresswidth + "%";
      progresscounter.innerHTML = i+1 + '/10';
      progresscounter.style.left = progresswidth + "%";
    }
  };
}

function randomize(arr) {
  return arr.sort(() => Math.random() - 0.5);// array sort does sort the strings from the small string to the bigger one if the parameter is positive and the opposite if the number is negative and math.rand returns a number between 0 and 1
}

let xmlhttp = new XMLHttpRequest();//creates a new object of the predefined calss which is xhr //REQUEST LI KAYMCHI U KAYJI
        xmlhttp.onreadystatechange = function() { //when the state of the request changes 
            if (this.readyState == 4 && this.status == 200) {  // 4 means the request is complete and 200 means the request was successful 
              qsts=JSON.parse(this.responseText); // assigns the value of this.responseText parsed as JSON to the qsts variable
              randomize(qsts);
            }
        };
xmlhttp.open("GET", "/Quizizy-BackEnd/assets/scripts/scripts.php" , false); // false indicats that the request should be handled synchronously
xmlhttp.send(); // sends request to the server