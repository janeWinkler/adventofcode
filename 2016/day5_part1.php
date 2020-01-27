<?php

$pass= '';
$int = 0;
$str = 'uqwqemis';


while( strlen($pass) < 8){
    
    $str_md5 = md5($str.$int);
    
    if(strcmp(substr($str_md5,0, 5), '00000') == 0){
        $pass = $pass.substr($str_md5,5,1);
        $int++;
    }else{
        $int++;
    }
}

echo $pass;
