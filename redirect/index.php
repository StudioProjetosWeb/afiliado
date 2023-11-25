<?php
// Mapeamento de IDs de produto para URLs
$productLinks = array(
    'produto1' => 'https://link-para-produto1.com',
    // Adicione mais mapeamentos aqui
);

// Obtém o ID do produto da query string
$productID = $_GET['id'] ?? '';

// Verifica se o ID do produto está no mapeamento
if (array_key_exists($productID, $productLinks)) {
    // Redireciona para o URL do produto
    header('Location: ' . $productLinks[$productID]);
    exit;
} else {
    echo "Produto não encontrado!";
}
?>
