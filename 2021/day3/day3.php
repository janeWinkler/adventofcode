<?php

include 'input.php';
$arr = preg_split('/([\s]+| \n)/', $input);
$arr_length = count($arr);
$input_length = strlen($arr[0]);
//print_r($arr);
$bit_arr = array();

//builds array from 1st, 2nd 3rd, etc bit of each number
for ($x = 0; $x < $input_length; $x++) {
    $new_str = '';
    for ($i = 0; $i < $arr_length; $i++) {
        $new_str .= substr($arr[$i], $x, 1);
    }

    $bit_arr[$x] = $new_str;
}

//print_r($bit_arr);
function gamma_rate($bit_arr)
{
    $sort = array();
    $gamma_rate = '';
    $epsilon_rate = '';
    foreach ($bit_arr as $key => $val) {
        //echo "$key and the $val";
        //echo substr($val, 1, 1);
        $sum = 0;
        for ($i = 0; $i < strlen($val); $i++) {
            $sum += substr($val, $i, 1);
            //echo substr($val, $i, 1);
        }
        //$val = max(strlen($arr) - $sum);
        $sort[$key] = array('0' => strlen($val) - $sum, '1' => $sum,);

        if ($sort[$key][0] > $sort[$key][1]) {
            $gamma_rate .= 0;
            $epsilon_rate .= 1;
        } else {
            $gamma_rate .= 1;
            $epsilon_rate .= 0;
        }
    }

    //echo $gamma_rate;
    echo bindec($gamma_rate) * bindec($epsilon_rate);
    echo bindec($gamma_rate) . "and the" . bindec($epsilon_rate);
    //print_r($sort);
}

gamma_rate($bit_arr);



//print_r($new_arr);