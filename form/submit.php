<?php

require_once('../classes/form.class.php');

if(isset($_POST['to']) && isset($_POST['from']) && isset($_POST['body'])) {
    $to = $_POST['to'];
    $from = $_POST['from'];
    $body = $_POST['body'];

    if(empty($to) || empty($from) || empty($body)) {
        return "All fields mut be field";
    } else {
        $form = new Form();
        $result = $form->createCard($to, $from, $body);

        echo $result;
    }
}