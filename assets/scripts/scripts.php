<?php
include('../../DB/database.php');

class qsts extends Database{

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
$json_data= json_encode($data);
print_r($json_data);
?>