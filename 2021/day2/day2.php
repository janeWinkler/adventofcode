<?php

include 'input.php';
$down = 0;
$up = 0;
$horizontal = 0;
$arr = preg_split('/([\s]+| \n)/', $input);

for ($x = 0; $x < count($arr); $x++) {
    switch ($arr[$x]) {
        case 'forward':
            $horizontal += $arr[$x + 1];
            break;
        case 'up':
            $up += $arr[$x + 1];
            break;
        case 'down':
            $down += $arr[$x + 1];
            break;

        default:
            break;
    }
};

$depth = $down - $up;
echo $horizontal * $depth;