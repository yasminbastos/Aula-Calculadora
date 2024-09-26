function calculadora(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1+num2
            break
        case '-':
            return num1-num2
            break
        case '/':
            if (num2!= 0){
                return num1/num2}
            else{
                return "Não é possivel dividir o número por zero"
            }
            break
        case '*':
            return num1*num2
            break
        default:
            return "Operacão invalida"
    }
}

let calcular = calculadora(8,12,'/')
console.log("O resultado é: "+ calcular)