<?php
 foreach($_POST as $name=>$value)
 {
    $contents .= "$name = $value" . "\n";
 }

 // save locally in cache folder
 $fd = fopen("cache/filename.txt", "w");
 fwrite($fd, $contents);
 fclose($fd);

 // mail me the submitted data
 @mail("a@b.c", "some subject", $contents);

 // die in piece
 die();
?>