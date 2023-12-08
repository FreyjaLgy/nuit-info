<!DOCTYPE html>

<body>
    <?php include('C:\xampp\htdocs\nuit-info\chrono.php'); 
   $end = departureTime();
   echo $end;
    ?>

    <script>
        // Récupérer la variable depuis le stockage local
        var maVariable = localStorage.getItem("maVariable");
        
        // Utiliser la variable comme nécessaire
        document.write(maVariable);
    </script>


</body>
</html>
