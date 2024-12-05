<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Ambil data dari form
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $location = htmlspecialchars($_POST['location']);
    $phone = htmlspecialchars($_POST['phone']);

    // Informasi mobil
    $carName = "Lamborghini Huracán EVO"; // Ganti dengan data mobil Anda
    $carPrice = "$208,571"; // Ganti dengan harga mobil Anda

    // Isi email
    $to = "johanstri666@gmail.com"; // Ganti dengan email dealer Anda
    $subject = "New Car Inquiry from $name";

    $emailContent = "
    <html>
    <head>
      <title>Car Inquiry</title>
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        table, th, td {
          border: 1px solid #000;
        }
        th, td {
          padding: 10px;
          text-align: left;
        }
      </style>
    </head>
    <body>
      <h2>Customer Inquiry</h2>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Location:</strong> $location</p>
      <p><strong>Phone:</strong></p>
      <p>$phone</p>
      <h3>Car Details</h3>
      <table>
        <tr>
          <th>Car Name</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>$carName</td>
          <td>$carPrice</td>
        </tr>
      </table>
    </body>
    </html>
    ";

    // Headers untuk email HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Kirim email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email. Please try again.";
    }
}
?>
