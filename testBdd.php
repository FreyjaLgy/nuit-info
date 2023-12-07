<?php include('C:\xampp\htdocs\nuit-info\connect.php'); ?>


<body>
    
    <?php
        $bdd = connection();

        $request = 'SELECT * FROM user';
        $reponse = $bdd->query($request);

        foreach ($reponse as $ligne) {
            echo $ligne['username'] ;
        }
    ?>

</body>