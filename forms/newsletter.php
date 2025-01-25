<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405); // Method Not Allowed
  echo json_encode(['error' => 'Method Not Allowed']);
  exit;
}
// Get POST data
$email = isset($_POST['email']) ? $_POST['email'] : '';


// Prepare data for the cURL request
$data = array(
  "bId" => "MTAwMDAwMjky",
  "type" => "1",
  "name" => ".",
  "mobile" => ".",
  "email" => $email,
  "message" => ".",
);

// print_r($data);

// Initialize cURL
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://voibiz.com/writeresponse',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => json_encode($data),
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

// Execute cURL and get the response
$response = curl_exec($curl);

// Close cURL session
curl_close($curl);

// Output the response from the API
echo $response;
