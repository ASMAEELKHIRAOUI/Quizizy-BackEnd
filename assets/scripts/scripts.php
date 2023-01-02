<?php
include('../../DB/database.php');

class qsts extends Database{
    // public $id;
    // public $qst;
    // public $choice1;
    // public $choice2;
    // public $choice3;
    // public $choice4;
    // public $answer;
    // public $explanation;

    function getQst() {
        $conn= $this->connection();
        $sql = "SELECT * FROM questions";
        $result=$conn->query($sql);
        $result = $result->fetchAll(PDO::FETCH_ASSOC);
        return $result;
}
}

$test = new qsts();
$data = $test->getQst();
print_r($data);

    for($i=0;$i<count($data);$i++){
        $array=[];
        $object={
            "qst"=$data['question'],
            "choice1"=$data['choice1'],
            "choice2"=$data['choice2'],
            "choice3"=$data['choice3'],
            "choice4"=$data['choice4'],
            "correct"=$data['correct'],
            "explanation"=$data['explanation'],
        }
    }

    // $json_data= json_encode($array);
    // $array_assoc= JSON.parse($json_data);
    // print_r($array_assoc);


?>