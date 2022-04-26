<?php

$BuisinessName = filter_input(INPUT_POST, 'BuisinessName');
$email = filter_input(INPUT_POST, 'email');
$Password = filter_input(INPUT_POST, 'Password');
$Monday = filter_input(INPUT_POST, 'Monday');
$Tuesday = filter_input(INPUT_POST, 'Tuesday');
$Wednesday = filter_input(INPUT_POST, 'Wednesday');
$Thursday = filter_input(INPUT_POST, 'Thursday');
$Friday = filter_input(INPUT_POST, 'Friday');
$Saturday = filter_input(INPUT_POST, 'Saturday');
$Sunday = filter_input(INPUT_POST, 'Sunday');
// if(!empty($BuisinessName)) echo "buisinessName"

$host 'localhost';
$database: 'user_login';
$user: 'root';
$password: 'AudreyKacur';

$conn = new mysqli($host, $user, $password, $database, $Monday, $Tuesday, $Wednesday, $Thursday, $Friday, $Saturday, $Sunday);

$sql = "INSERT INTO userLogin(BuisinessName, email, Password, Monday, Tuesday, Wednesday, Thurday, Friday, Saturday, Sunday)
values($BuisinessName, $email, $password, $database, $Monday, $Tuesday, $Wednesday, $Thursday, $Friday, $Saturday, $Sunday);


$conn->close();


    /*
    $BuisinessName = $_POST['bname'];
    $email = $_POST['email'];
    $Password = $_POST['password'];

    if(!empty($BuisinessName) || !empty($email)|| !empty($password))
    {
        $host: 'localhost';
        $database: 'user_login';
        $user: 'root';
        $password: 'AudreyKacur';

        //create connection
        $conn = new mysqli($host, $user, $password, $database);

        if(mysqli_connect_error())
        {
            die('Connect Error('. mysqli_connect_errorno().')'. mysqli_connect_error());

        }
        else
        {
            $SELECT = "SELECT email FROM userLogin WHERE email = ? Limit 1";
            $INSERT = "INSERT Into userLogin (BuisinessName, email, Password) values(?,?,?)";

            $stmt = $conn -> prepare($SELECT);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($email);
            $stmt->store_result();
            $rnum = $stmt->num_rows;

                $stmt->close();

                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param($BuisinessName, $email, $Password);
                $stmt->execute();

            $stmt->close();
            $conn->close();
        }
    } 
    else
    {
        echo "All feilds are requiired";
        die();
    }*/
?>

