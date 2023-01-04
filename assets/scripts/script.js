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

// let qsts = [
//   {
//     qst: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
//     choice1: "Amazon EC2 costs are billed on a monthly basis",
//     choice2: "Users retain full administrative access to their Amazon EC2 instances.",
//     choice3: "Amazon EC2 instances can be launched on demand when needed",
//     choice4: "Users can permanently run enough instances to handle peak workloads.",
//     correct: "3",
//     explanation: "The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load.",
//   },
//   {
//     qst: "Which AWS service would simplify the migration of a database to AWS?",
//     choice1: "AWS Storage Gateway",
//     choice2: "AWS Database Migration Service (AWS DMS)",
//     choice3: "Amazon EC2",
//     choice4: "Amazon AppStream 2.0",
//     correct: "2",
//     explanation: "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.",
//   },
//   {
//     qst: " Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS?",
//     choice1: "AWS Config",
//     choice2: "AWS OpsWorks",
//     choice3: "AWS SDK",
//     choice4: "AWS Marketplace",
//     correct: "4",
//     explanation: "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.",
//   },
//   {
//     qst:"Wich AWS networking service enables a company to create a virtual network within AWS?",
//     choice1: "AWS Config",
//     choice2: "Amazon Route 53",
//     choice3: "AWS Direct Connect",
//     choice4: "Amazon Virtual Private Cloud (Amazon VPC)",
//     correct: "4",
//     explanation: "Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.",
//   },
//   {
//     qst: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
//     choice1: "Configuring third-party applications",
//     choice2: "Maintaining physical hardware",
//     choice3: "Securing application access and data",
//     choice4: "Managing guest operating systems",
//     correct: "2",
//     explanation: "Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.",
//   },
//   {
//     qst: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
//     choice1: "AWS Regions",
//     choice2: "Edge locations",
//     choice3: "Availability Zones",
//     choice4: "Virtual Private Cloud (VPC)",
//     correct: "2",
//     explanation: "To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide",
//   },
//   {
//     qst: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
//     choice1: "Use Amazon Cloud Directory",
//     choice2: "Audit AWS Identity and Access Management (IAM) roles",
//     choice3: "Enable multi-factor authentication",
//     choice4: "Enable AWS CloudTrail",
//     correct: "3",
//     explanation: "Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.",
//   },
//   {
//     qst: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
//     choice1: "AWS Trusted Advisor",
//     choice2: "AWS CloudTrail",
//     choice3: "AWS X-Ray",
//     choice4: "AWS Identity and Access Management (AWS IAM)",
//     correct: "2",
//     explanation: "AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.",
//   },
//   {
//     qst: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
//     choice1: "Amazon Simple Notification Service (Amazon SNS)",
//     choice2: "AWS CloudTrail",
//     choice3: "AWS Trusted Advisor",
//     choice4: "Amazon Route 53",
//     correct: "1",
//     explanation: "Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.",
//   },
//   {
//     qst: "Where can a user find information about prohibited actions on the AWS infrastructure?",
//     choice1: "AWS Trusted Advisor",
//     choice2: "AWS Identity and Access Management (IAM)",
//     choice3: "AWS Billing Console",
//     choice4: "AWS Acceptable Use Policy",
//     correct: "4",
//     explanation: "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.",
//   },
// ];

let qstIndex = 0;
let qsts = [];

// randomize(qsts);

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
  for (incorrectAnswer of incorrectAnswers) {
    result.innerHTML += '<div class="mb-3 border border-danger p-3 rounded bg-danger bg-opacity-25"><div>Q: '+incorrectAnswer.qst+'</div><div>A: '+incorrectAnswer.correctAnswer+'</div><div>Explanation: '+incorrectAnswer.explanation+'</div></div>';
  }
  for (correctAnswer of correctAnswers) {
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

var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              // console.log(this.responseText);
              qsts=JSON.parse(this.responseText);
              randomize(qsts);

              // questionIndex = randoom(questions);
              // console.log(questions);
            }
        };
xmlhttp.open("GET", "/Quizizy-BackEnd/assets/scripts/scripts.php" , false);
xmlhttp.send();