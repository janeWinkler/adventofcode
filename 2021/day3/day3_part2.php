<?php

include 'input.php';
$arr = preg_split('/([\s]+| \n)/', $input);

$input_length = strlen($arr[0]);
$bit_arr = array();
$oxygen_generator_rating = array();

function C02_rating($input, $input_length)
{
    for ($x = 0; $x < $input_length; $x++) {
        $arr_length = count($input);
        $new_str = 0;
        $sum = 0;
        for ($i = 0; $i < $arr_length; $i++) {
            $sum += intval(substr($input[$i], $x, 1));
        }
        if ($sum >= $arr_length - $sum) {
            $lc = 0;
        } else {
            $lc = 1;
        }

        foreach ($input as $a => $v) {
            //echo $lc." ";
            if (substr($v, $x, 1) != $lc) {
                unset($input[$a]);
            }
        }
        $input = (array_values($input));
        print_r($input);
    }
}


C02_rating($arr, $input_length);

for ($x = 0; $x < $input_length; $x++) {
    $arr_length = count($arr);
    $new_str = 0;
    $sum = 0;
    for ($i = 0; $i < $arr_length; $i++) {
        $sum += intval(substr($arr[$i], $x, 1));
    }
    if ($sum >= $arr_length - $sum) {
        $mc = 1;
    } else {
        $mc = 0;
    }


    foreach ($arr as $a => $v) {
        if (substr($v, $x, 1) != $mc) {
            unset($arr[$a]);
        }
    }
    $arr = (array_values($arr));
    print_r($arr);
}

