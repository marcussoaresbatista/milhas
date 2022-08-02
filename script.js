let ValorDaCompra=document.getElementById('valorCompra')      //2000

let PontosDados= document.getElementById('pontos')//pontos acumulados
// valor da compra + os  pontos dados(valor da compra vezes pontos)

//preço de cada milha
let ValorDeCadaMilha= document.getElementById('milha')
let percentual= document.getElementById('percentual')
let button=document.getElementById('button')
let precoFinal=document.getElementById('precoFinal')//inner
let finalResultado= document.getElementById('final') //inner 


function soma(){
    let TotalDePontos= ValorDaCompra.value* PontosDados.value
    console.log(`voce acumulou ${TotalDePontos} pontos em compras`)

    //quantos porcento o smiles pagara
//percentual que o smiles pagara,só o precentual!
let Smiles= TotalDePontos * percentual.value/100 //oprimeiro 100 é quantos porcento
console.log(`A Smiles te pagou + ${Smiles} milhas`)

//valor final do smiles
//total dos pontos e percentual
let totalDaSmiles= TotalDePontos+Smiles
console.log(`Voce ficou com um total de ${totalDaSmiles} Milhas`) //valor total de pontos e percentual smile

//valor total das milhas convertidas em dinheiro
let ValorDasmilhas= totalDaSmiles *ValorDeCadaMilha.value /1000
console.log(`Milhas Convertidas Em Dinheiro R$ ${ValorDasmilhas.toFixed(2)}`)
let total = ValorDaCompra.value - ValorDasmilhas
finalResultado.innerHTML= `R$ ${ValorDasmilhas.toFixed(2)}` 

precoFinal.innerHTML= `R$ ${total.toFixed(2)}`

}
soma()
button.addEventListener('click',soma)




/*










//preço final do produto
let custoFinal= ValorDaCompra-ValorDasmilhas
console.log(`Seu Produto saiu de R$ ${ValorDaCompra.toFixed(2)} por R$ ${custoFinal.toFixed(2)}`)

let economizou= ValorDaCompra-custoFinal
console.log(`Voce economizou R$ ${economizou.toFixed(2)} e daria pra tentar conseguir mais alguns descontos com cashback e cupons de desconto` )*/
