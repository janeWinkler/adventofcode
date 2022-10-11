<?php
    include 'input.php';
    $count = 0;
    $arrLength = count($numbers);

    for($x = 1; $x < $arrLength; $x++)
    {
  	    if($numbers[$x] > $numbers[$x -1]){
  		    $count+= 1;
  	    }
    }

    echo $count;








