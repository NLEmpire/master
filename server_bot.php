<?php
$botToken="1010062785:AAGk68opyFeyrle6kLX7uMggWW5XTBrbEH0";
$id=331636377;
$text="eski";
$req_para=[
    'chat_id' => $id,
    'text' => $text
    ];
        $req_url = "https://api.telegram.org/bot".$botToken."/sendmessage?chat_id=".$id."&text=".$text;
        file_get_contents($req_url);
?>
