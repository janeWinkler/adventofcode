<?php
    include 'input.php';
    $count = 0;
    $arrLength = count($numbers);
    $sum1 = 0;
    $sum2 = 0;
    $end = 3;

    for($x = 0; $x < $arrLength; $x++)
    {
        for($i = $x; $i < $x + $end; $i++)
        {
            $sum1 += $numbers[$i];
            $sum2 += $numbers[$i + 1];
        }

        if($sum2 > $sum1){
            $count+= 1;
        }

        $sum1 = 0;
        $sum2 = 0;
    }

    echo $count;