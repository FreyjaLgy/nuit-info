<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greennapping</title>
    
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="script.js"></script>
</head>

<?php
session_start();
// Inclure le contenu de index.html
include 'index.html';
$date = date('h:i:s', time());
$_SESSION['date'] = $date;
?>

<!-- Autres éléments de votre page PHP -->

</html>