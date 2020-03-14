<?php 
$nome = $_POST['nome'];
$estabelecimento = $_POST['estabelecimento'];
$telefone = $_POST['telefone'];
$endereco = $_POST['endereco'];

$arquivo = "
  <style type='text/css'>
  body {
  margin:0px;
  font-family:Verdane;
  font-size:12px;
  color: #666666;
  }
  a{
  color: #666666;
  text-decoration: none;
  }
  a:hover {
  color: #FF0000;
  text-decoration: none;
  }
  </style>
    <html>
        <meta charset='utf8' />

        <table width='510' border='1' cellpadding='1' cellspacing='1' bgcolor='#CCCCCC'>
            <tr>
              <td>
  <tr>
                 <td width='500'>Nome:$nome</td>
                </tr>
                <tr>
                  <td width='320'>Estabelecimento:<b>$estabelecimento</b></td>
     </tr>
      <tr>
                  <td width='320'>Telefone:<b>$telefone</b></td>
                </tr>
                <tr>
                  <td width='320'>Endereco:$endereco</td>
                </tr>
            </td>
          </tr> 
        </table>
    </html>
  ";

  $emailenviar = "contato@vcmd.app";
  $destino = $emailenviar;
  $assunto = "Contato pelo Site";
 
  $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
      $headers .= 'From: '.$nome.' <contato@vcmd.app>';
  //$headers .= "Bcc: $EmailPadrao\r\n";
   
  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
  echo " <meta http-equiv='refresh' content='1;URL=index.html?form=success'>";
  } else {
  echo " <meta http-equiv='refresh' content='1;URL=index.html?form=error";
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>[VCMD]</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <lottie-player
        src="https://assets10.lottiefiles.com/datafiles/rIUwITajEDZ15GmHuOSLy1RKokHwubmZB7KGTU93/circleloading.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay >
    </lottie-player>
</body>
</html>