<?php

include 'input.php';

$arr = preg_split('/([\s]+| \n)/', $input);

$aim = 0;
$depth = 0;
$horizontal = 0;

for ($x = 0; $x < count($arr); $x++) {
    switch ($arr[$x]) {
        case 'forward':
            $horizontal += $arr[$x + 1];
            $depth += $arr[$x + 1] * $aim;
            break;
        case 'up':
            $aim -= $arr[$x + 1];
            break;
        case 'down':
            $aim += $arr[$x + 1];
            break;

        default:
            break;
    }
};

echo $horizontal * $depth;