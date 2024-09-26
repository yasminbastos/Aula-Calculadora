function calculadora(num1, num2, operacao) {
    let resultado = 0;
    switch (operacao) {
        case ('soma' || 'SOMA'):
            resultado = (num1 + num2);
            break;
        case ('subtracao' || 'SUBTRACAO'):
            resultado = (num1 - num2);
            break;
        case ('multiplicacao' || 'MULTIPLICACAO'):
            resultado = (num1 * num2);
            break;
        case ('divisao' || 'DIVISAO'):
            if (num2 != 0) {
                resultado = (num1 / num2);
            }
            else {
                resultado = "Não é possivel dividir o número por zero"
            }
            break;
        default:
            resultado = "Operacão invalida"

    }
    return resultado;
}

console.log(calculadora(8,12,'divisao'))
