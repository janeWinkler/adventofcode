<?php

$pass = '';
$pos ='';
$int = 0;
$str = 'uqwqemis';


while( strlen($pass) < 8){
    
    $str_md5 = md5($str.$int);
    $repeat = strpos($pos, substr($str_md5,5, 1)) !== false;
    
    if(strcmp(substr($str_md5,0, 5), '00000') == 0 && substr($str_md5,5, 1) < 8 && is_numeric(substr($str_md5,5, 1)) && $repeat < 1){
        $pass = $pass.substr($str_md5,6,1);
        $pos = 	$pos.substr($str_md5,5,1);
        $int++;
    }else{
        $int++;
    }
}

print_r($pos.$pass);

//694190cd