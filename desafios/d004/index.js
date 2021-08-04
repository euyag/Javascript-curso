function clicou(){
    let produto = window.prompt('que produto vc esta comprando?')
    let preco = Number(window.prompt(`quanto custa o ${produto} que vc esta comprando?`))
    let valor = Number(window.prompt(`qual foi o valor que vc deu para pagar o ${produto}`))
    window.alert(`
    vc comprou um ${produto} que custou R$ ${preco},deu R$ ${valor} em dinheiro e vai receber ${valor - preco} de troco. volte sempre 
    `)
}