<?php

require_once('../config/db.class.php');

class Form extends Dbh {
    public function createCard($to, $from, $body) {
        try {
            $sql = "INSERT INTO cards (to_user, from_user, body) VALUES (:to_user, :from_user, :body)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->bindParam(":to_user", $to);
            $stmt->bindParam(":from_user", $from);
            $stmt->bindParam(":body", $body);

            $stmt->execute();
            
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
}