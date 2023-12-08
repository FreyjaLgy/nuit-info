<?php

function departureTime(){
    $date = date('d-m-y h:i:s');
    return $date;
}


function calculDuree($start, $end){
    return $end - $start;
}

?>