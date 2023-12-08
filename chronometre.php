<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chronomètre</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include('C:\xampp\htdocs\nuit-info\chrono.php');
   $start = departureTime();
   echo $start;
   ?>
   <script>
        // Définir la variable dans le stockage local
        document.write($start);
        localStorage.setItem("maVariable", <?php $start ?>);
    </script>

    

    <a href="chronometre2.php">Page suivante</a>

</body>
</html>
