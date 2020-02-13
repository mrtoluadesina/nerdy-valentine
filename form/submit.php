<?php

require_once('../classes/form.class.php');

if(isset($_POST['submit'])) {
    $to = $_POST['to'];
    $from = $_POST['from'];
    $body = $_POST['body'];

    if(empty($to) || empty($from) || empty($body)) {
        return "All fields mut be field";
    } else {
        $form = new Form();
        $result = $form->createCard($to, $from, $body);

        if(!$result) {
            header("Location: error.php");
        } else {
            echo "Successfull";
        }
    }
}