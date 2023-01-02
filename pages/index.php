<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <!-- <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"> -->
    <!-- CSS only -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="../assets/sass/style.css"/>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <title>Quizizy</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg mb-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="../assets/img/logo.png" alt="Quizizy" style="height: 70px; width: 90px;"></a>
            <div class="steps d-flex position-absolute start-50 translate-middle mt-5">
                <div class="ms-5">
                    <div class="progress" id="progress"></div>
                    <div class="step active">
                        <i class="bi bi-info"></i>
                    </div>
                </div>
                <div class="ms-5">
                    <div class="step">
                        <i class="bi bi-question-lg"></i>
                    </div>
                </div>
                <div class="ms-5">
                    <div class="step">
                        <i class="bi bi-boxes"></i>
                    </div>
                </div>
            </div>
            <!-- <div class="d-flex justify-content-end"></div> -->
        </div>
    </nav>
<div id="home" class="home position-relative">
    <div class="position-absolute top-50 start-50 translate-middle">
        <h2 class="welcome">Welcome to Quizizy</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat in quam sit amet vulputate. Donec non lectus consequat, vulputate justo et, pellentesque dui. Proin odio nulla, lobortis tempus lacinia non, blandit in neque. Suspendisse a efficitur risus, finibus iaculis neque. Pellentesque iaculis felis quis sapien malesuada maximus. Pellentesque ornare nibh fermentum auctor suscipit.
        </p>
        <div class="d-flex justify-content-end">
            <button class="btn start" id="start">Start the Quiz <i class="bi bi-arrow-bar-right"></i></button>
        </div>
    </div>
</div>
<div id="quiz" >
    <div class=" quiz row-lg h-100 d-flex align-items-center p-5 flex-wrap">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
            <div class="qst d-flex justify-content-center" id="qst"></div>
            <div class="progressbar d-flex justify-content-center my-4" id="progressbar">
                <div id="progresscounter" class="progresscounter"></div>
            </div>
            <div class="choices row-lg h-100 d-flex align-items-center p-5 flex-wrap">
                <div class="col-lg-3">
                    <button class="choice my-2" id="choice1" onclick="answerSubmit('1');"></button>
                </div>
                <div class="col-lg-3">
                    <button class="choice my-2" id="choice2" onclick="answerSubmit('2');"></button>
                </div>
                <div class="col-lg-3">
                    <button class="choice my-2" id="choice3" onclick="answerSubmit('3');"></button>
                </div>
                <div class="col-lg-3">
                    <button class="choice my-2" id="choice4" onclick="answerSubmit('4');"></button>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="results">
    <div class="m-5 fs-5">
        <div class="d-flex mb-5 justify-content-center">
            <div>Your Score : </div>
            <div class="ms-2" id="score"></div>
        </div>
        <div class="resultsExplanation p-4">
        </div>
    </div>
</div>
<script src="../assets/scripts/script.js"></script>
</body>
</html>