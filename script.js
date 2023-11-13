const botao = document.getElementById('botaoparaConversao');
const select = document.getElementById('tipoConversao');

botao.addEventListener('click', function() {
    const tipoSelecionado = select.value;

    if (tipoSelecionado === 'tipoUm') {
        converterNumeroRomano();
    } else if (tipoSelecionado === 'tipoDois') {
        const numeroArabico = parseInt(document.getElementById('numeroParaConversao').value);
        const resultado = converterNumeroArabico(numeroArabico);
        document.getElementById('resultadoConversao').innerText = `O número romano é: ${resultado}`;
    }
     // Limpa o campo de input após a conversão
    document.getElementById('numeroParaConversao').value = '';
});


// Definindo um objeto para associar os valores dos números romanos aos números arábicos


/*for...in é um loop utilizado para iterar sobre as propriedades enumeráveis de um objeto.
 Geralmente é usado para percorrer as chaves (ou índices no caso de arrays) de um objeto. */

function converterNumeroRomano() {
    const numeroRomano = document.getElementById('numeroParaConversao').value; // Obtendo o número romano inserido pelo user

    const romanos = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    
    };

   
    if (verificarSequencia(numeroRomano)) { //VERIFICA O VALOR QUE VEIO DO INPUT ANTES DE CONTINUAR 
        alert(" I, X, C e M não podem se repetir mais de 3 vezes consecutivas.");
        return; // interrompe a execução se a sequência for inválida
    }

    let valorArabico = 0;   //Guarda o valor numérico convertido do algarismo romano
    let valorAnterior = 0;//Armazena o valor do algarismo anterior na iteração do loop.


    for (let i = numeroRomano.length - 1; i >= 0; i--) {
        const valorAtual = romanos[numeroRomano[i]];

        if (valorAtual >= valorAnterior) {  //SE ATUAL MENOR CAI DIRETO NO ELSE
            valorArabico += valorAtual; //SE O VALOR ATUAL É MAIO QUE ANTERIOR  SOMA = 6
        } else {
            valorArabico -= valorAtual; // VALOR ANTERIR MAIOR QUE E VALORATUAL DIMINUI = 4 
        }

        valorAnterior = valorAtual;
    }

    const resultadoConversao = document.getElementById('resultadoConversao');
    resultadoConversao.innerHTML = `O número arabico é : ${valorArabico}`;
    
}



//VERIFICAÇÃO DE MAXIMO DE SEQUÊNCIAS 
function verificarSequencia(numeroRomano) {
    const sequenciaInvalida = /IIII|XXXX|CCCC|MMMM/; // Expressão regular para verificar sequências inválidas
    return sequenciaInvalida.test(numeroRomano); 
    /* EXPRESSÃO REGULAR POSSIBILITA ATRIBUIR UMA SEQUENCIA ESPECIFICA AO JUNTA COM  .TEST() FAZ A VERIFICAÇÃO 
    PARA VER SE A SEQUENCIA COLOCADA PELO USAR NO MEU NUMEROROMANO E CAI EM ALGUNS DESSES PADROES QUE COLOQUEI NA EXPRESSÃO*/
   
   
}

/*while é uma estrutura de repetição que executa um bloco de código 
enquanto uma condição especificada for verdadeira.*/

function converterNumeroArabico(numero) {
    // Meu objeto arabico
    const arabicos = [//lógica de subtração
        { numero: 1000, romano: "M" },
        { numero: 900, romano: "CM" },
        { numero: 500, romano: "D" },
        { numero: 400, romano: "CD" },
        { numero: 100, romano: "C" },
        { numero: 90, romano: "XC" },
        { numero: 50, romano: "L" },
        { numero: 40, romano: "XL" },
        { numero: 10, romano: "X" },
        { numero: 5, romano: "V" },
        { numero: 4, romano: "IV" },
        { numero: 1, romano: "I" }
    ];

    let retornoRomano = '';

    for (let i = 0; i < arabicos.length; i++) {
        while (arabicos[i].numero <= numero) {
            retornoRomano += arabicos[i].romano;
            numero -= arabicos[i].numero;
        }
    }

    return retornoRomano;
}



function exibirResultado(resultado) {
    const resultadoConversao = document.getElementById('resultadoConversao');
    resultadoConversao.innerHTML = `O número convertido é: ${resultado}`;
}





















/*ATENÇÃO: DIFERENÇA DE PALAVRAS

    Algarismo: símbolo numérico, sistema decimal."123" 
    Algarismo  romano:  representados por símbolos :  I, V, X, 

    ALGORITOMO:Conjunto de regras , processo computacional  */
























