<?php

function connection(){
    // Create connection.
	$conn = new mysqli('localhost', 'root', '', 'greennaping') ;
    $conn->set_charset('utf8');

    //Check connection.
	if (!$conn){
		die('erreur connexion');
	}
	
	return $conn;
}

?>