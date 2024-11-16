let x
let y
let operacao
let choice
let confirmation

choice = prompt('Escolha a operação matemática: 1) soma, 2)subtração, 3)divisão, 4)multiplicação')
switch (choice){
    case '1':
        operacao = 'soma'
        break
    case '2':
        operacao = 'subtracao'
        break
    case '3':
        operacao = 'divisao'
        break
    case '4':
        operacao = 'multiplicacao'
        break
}
confirmation = confirm ('Você escolheu ' + operacao + ". Está certo disso?")

if(confirmation){
    x = prompt('Qual o primeiro valor?')
    y = prompt('Qual o segundo valor?')

    if(operacao === 'soma'){
        alert('A soma dos dois valores é: ' + (Number(x) + Number(y)))
    }

    if(operacao === 'subtracao'){
        alert('A subtração dos valores é: ' + (Number(x) - Number(y)))
    }

    if(operacao === 'divisao'){
        alert('A divisão dos valores é: ' + (Number(x)/Number(y)))
    }

    if(operacao === 'multiplicacao'){
        alert('A multiplicação dos valores é: ' + (Number(x) * Number(y)))
    }
} else {
    alert('Reinicie o programa.')
}
