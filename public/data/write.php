<?php
  $jsonString = json_decode(file_get_contents('php://input'), true);
  $data = $jsonString["data"];
  $fname = $jsonString["fname"];
  file_put_contents($fname . '.json', $data, true);
  echo '{ "success": true }';
?>