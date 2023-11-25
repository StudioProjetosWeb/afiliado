function redirectToProduct(productID) {
    // Aqui você adicionará o mapeamento entre productID e a URL real do produto
    const productLinks = {
        'produto1': 'https://pay.kiwify.com.br/QuzTN5U?afid=YeZZFBXM',
        'produto2': 'https://link-para-produto1.com',
        'produto3': 'https://link-para-produto1.com',
        'produto4': 'https://link-para-produto1.com',
    };

    const url = productLinks[productID];
    if (url) {
        window.location.href = url; // Redireciona para o link do produto
    } else {
        alert('Link do produto não encontrado!');
    }
}
