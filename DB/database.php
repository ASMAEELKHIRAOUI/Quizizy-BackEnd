<?php

class Database{
    static public function connection(){
      try {
        //code...
         $db = new PDO("mysql:host=localhost;dbname=quizizyy","root","");
        $db ->exec("set names utf8");
        $db -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
        return $db ;
      } catch (PDOException $e) {
        echo "rrrr".$e;
      }
      
    }
}

?>