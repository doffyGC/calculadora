document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário

        // Obter os valores
        const num1 = parseFloat(document.querySelector('input[name="num1"]').value);
        const num2 = parseFloat(document.querySelector('input[name="num2"]').value);
        const operacao = document.querySelector('select[name="operacao"]').value;

        let resultado;

        // Realizar a operação
        switch (operacao) {
            case 'soma':
                resultado = num1 + num2;
                break;
            case 'subtracao':
                resultado = num1 - num2;
                break;
            case 'multiplicacao':
                resultado = num1 * num2;
                break;
            case 'divisao':
                if(num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = 'Erro: Divisão por zero';
                }
                break;
            default:
                resultado = 'Operação inválida';
        }

        // Exibir o resultado
        document.querySelector('.resultado p').textContent = `O resultado é: ${resultado}`;
    });
});