<?php
    $host = 'localuser';
    $db = 'db.sql';
    $user = 'root';
    $pass = '';

    $dsn = "mysql:host=$host;dbname=$db;charset=ut8mb4";

    try {
        $pdo = new PDO($dsn, $user, $pass);
        $pdo
    }
>?