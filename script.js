//let numero1 = prompt("Digite o primeiro número:");
//let numero2 = prompt("Digite o segundo número:");
  //  numero1 = parseFloat(numero1);
    //numero2 = parseFloat(numero2);
      //  if (numero1 > 0 && numero2 > 0) {
    
        //    console.log("Ambos os números são positivos.");
//} 
//else if (numero1 > 0 || numero2 > 0) {
 //   console.log("Pelo menos um dos números é positivo.");
//} 
//else {
  //  console.log("Nenhum dos números é positivo.");
//}

//--------------

//-- Exercicio número 2 --

//let numero1 = prompt("Digite o primeiro número:");
//let numero2 = prompt("Digite o segundo número:");

	//numero1 = parseFloat(numero1);
	//numero2 = parseFloat(numero2);

//console.log(`Número 1: ${numero1}`);
//console.log(`Número 2: ${numero2}`);

//console.log(`Número 1 é igual a Número 2? ${numero1 === numero2}`);
//console.log(`Número 1 é diferente de Número 2? ${numero1 !== numero2}`);
//console.log(`Número 1 é maior que Número 2? ${numero1 > numero2}`);
//console.log(`Número 1 é menor que Número 2? ${numero1 < numero2}`);
//console.log(`Número 1 é maior ou igual a Número 2? ${numero1 >= numero2}`);
//console.log(`Número 1 é menor ou igual a Número 2? ${numero1 <= numero2}`);

//--------------

//-- Execicio 03 --

//let numero = prompt("Digite um número:");

//numero = parseFloat(numero);

//if (numero > 0) {
   // console.log("O número é positivo.");
//} else if (numero < 0) {
    //console.log("O número é negativo.");
//} else {
  //  console.log("O número é zero.");
//}

//----------------

//--Exercicio 04--

let numero1 = prompt("Digite o primeiro número:");

let numero2 = prompt("Digite o segundo número:");

let operacao = prompt("Digite a operação (+, -, *, /):");


numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);


let resultado;


switch (operacao) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':

        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = "Erro: Divisão por zero não é permitida.";
        }
        break;
    default:
        resultado = "Operação inválida. Por favor, use +, -, * ou /.";
}


console.log(`Resultado: ${resultado}`);