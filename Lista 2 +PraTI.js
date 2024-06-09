const prompt = require('prompt-sync')(); 

// Todos os codigos estão comentados, para testalos é nevessario descomentar cada codigo, por gentileza.
// A resposta esta enumerada conforme o exercicio.

/* 
//Ex1

let cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
let anosFumando = parseInt(prompt("Quantos anos você já fumou? "));

let minutosPerdidos = cigarrosPorDia * 10 * 365 * anosFumando;
let diasPerdidos = minutosPerdidos / 1440;

console.log(`Você perderá aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`);
//

//Ex2

let velocidade = parseFloat(prompt("Qual é a velocidade do carro? "));

if (velocidade > 80) {
    let multa = (velocidade - 80) * 5;
    console.log(`Você foi multado! A multa é de R$ ${multa.toFixed(2)}`);
} else {
    console.log("Você está dentro do limite de velocidade.");
}
//

//Ex3

let distancia = parseFloat(prompt("Qual é a distância que você deseja percorrer (em km)? "));
let preco;

if (distancia <= 200) {
    preco = distancia * 0.50;
} else {
    preco = distancia * 0.45;
}

console.log(`O preço da passagem é R$ ${preco.toFixed(2)}`);

//

//Ex4

let a = parseFloat(prompt("Digite o comprimento do primeiro segmento de reta: "));
let b = parseFloat(prompt("Digite o comprimento do segundo segmento de reta: "));
let c = parseFloat(prompt("Digite o comprimento do terceiro segmento de reta: "));

if (a < b + c && b < a + c && c < a + b) {
    console.log("Os segmentos podem formar um triângulo.");
} else {
    console.log("Os segmentos não podem formar um triângulo.");
}

//

//Ex5

let escolhas = ["Pedra", "Papel", "Tesoura"];
let escolhaJogador = prompt("Escolha: Pedra, Papel ou Tesoura? ");
let escolhaComputador = escolhas[Math.floor(Math.random() * 3)];

console.log(`Computador escolheu: ${escolhaComputador}`);

if (escolhaJogador === escolhaComputador) {
    console.log("Empate!");
} else if (
    (escolhaJogador === "Pedra" && escolhaComputador === "Tesoura") ||
    (escolhaJogador === "Papel" && escolhaComputador === "Pedra") ||
    (escolhaJogador === "Tesoura" && escolhaComputador === "Papel")
) {
    console.log("Você venceu!");
} else {
    console.log("Você perdeu!");
}

//

//Ex6

let numeroSorteado = Math.floor(Math.random() * 5) + 1;
let tentativa = parseInt(prompt("Adivinhe o número sorteado (entre 1 e 5): "));

if (tentativa === numeroSorteado) {
    console.log("Parabéns! Você acertou!");
} else {
    console.log(`Você errou! O número sorteado foi ${numeroSorteado}`);
}

//

//Ex7

let tipoCarro = prompt("Qual tipo de carro alugado (popular ou luxo)? ");
let diasAluguel = parseInt(prompt("Quantos dias de aluguel? "));
let kmPercorridos = parseFloat(prompt("Quantos km foram percorridos? "));

let precoDia = tipoCarro === "luxo" ? 150 : 90;
let precoKm;

if (tipoCarro === "luxo") {
    precoKm = kmPercorridos <= 200 ? kmPercorridos * 0.30 : (200 * 0.30) + ((kmPercorridos - 200) * 0.25);
} else {
    precoKm = kmPercorridos <= 100 ? kmPercorridos * 0.20 : (100 * 0.20) + ((kmPercorridos - 100) * 0.10);
}

let precoTotal = (diasAluguel * precoDia) + precoKm;

console.log(`O preço total a ser pago é R$ ${precoTotal.toFixed(2)}`);

//

//Ex8

let horasAtividade = parseFloat(prompt("Quantas horas de atividade física você teve no mês? "));
let pontos;

if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
    pontos = 10 * 2 + (horasAtividade - 10) * 5;
} else {
    pontos = 10 * 2 + 10 * 5 + (horasAtividade - 20) * 10;
}

let dinheiro = pontos * 0.05;

console.log(`Você ganhou ${pontos} pontos e R$ ${dinheiro.toFixed(2)}`);

//

//Ex9

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while (true) {
    let salario = parseFloat(prompt("Digite o salário: "));
    let sexo = prompt("Digite o sexo (M/F): ").toUpperCase();

    if (sexo === "M") {
        totalSalarioHomens += salario;
    } else if (sexo === "F") {
        totalSalarioMulheres += salario;
    }

    let continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
    if (continuar !== "S") {
        break;
    }
}

console.log(`Total pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);

//

//Ex10

let soma = 0;
let menor = null;
let quantidade = 0;
let quantidadePares = 0;

do {
    let numero = parseInt(prompt("Digite um número: "));
    soma += numero;
    quantidade++;
    if (numero % 2 === 0) {
        quantidadePares++;
    }
    if (menor === null || numero < menor) {
        menor = numero;
    }
    var continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
} while (continuar === "S");

let media = soma / quantidade;

console.log(`Somatório: ${soma}`);
console.log(`Menor valor: ${menor}`);
console.log(`Média: ${media}`);
console.log(`Quantidade de pares: ${quantidadePares}`);

//

//Ex11

let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
let razao = parseInt(prompt("Digite a razão da PA: "));

let soma = 0;

for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    console.log(termo);
    soma += termo;
}

console.log(`A soma dos 10 primeiros termos é ${soma}`);

//

//Ex12

let a = 1, b = 1;
console.log(a);
console.log(b);

for (let i = 3; i <= 10; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

//

//Ex13

let fibonacci = [1, 1];

for (let i = 2; i < 15; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log(fibonacci);

//

//Ex14

let nomes = [];

for (let i = 0; i < 7; i++) {
    nomes.push(prompt("Digite um nome: "));
}

console.log("Nomes na ordem inversa:");
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}

//

//Ex15

let numeros = [];
let posicoesPares = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
    if (numero % 2 === 0) {
        posicoesPares.push(i);
    }
}

console.log("Números pares e suas posições:");
posicoesPares.forEach(pos => {
    console.log(`Número: ${numeros[pos]}, Posição: ${pos}`);
});

//

//Ex16

let vetor = [];

for (let i = 0; i < 20; i++) {
    vetor.push(Math.floor(Math.random() * 100));
}

console.log("Vetor original:", vetor);

vetor.sort((a, b) => a - b);

console.log("Vetor ordenado:", vetor);

//

//Ex17

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    nomes.push(prompt(`Digite o nome da pessoa ${i + 1}: `));
    idades.push(parseInt(prompt(`Digite a idade da pessoa ${i + 1}: `)));
}

console.log("Pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
}

//

//Ex18 

let funcionario = {
    nome: prompt("Digite o nome do funcionário: "),
    cargo: prompt("Digite o cargo do funcionário: "),
    salario: parseFloat(prompt("Digite o salário do funcionário: "))
};

console.log("Dados do funcionário:");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);

// 

//Ex19

function validarHorario(horario) {
    let partes = horario.split(":");
    if (partes.length !== 3) return false;
    let [hh, mm, ss] = partes.map(Number);
    return hh >= 0 && hh < 24 && mm >= 0 && mm < 60 && ss >= 0 && ss < 60;
}

let horarios = [];

for (let i = 0; i < 5; i++) {
    let horario;
    do {
        horario = prompt(`Digite o horário ${i + 1} (HH:MM:SS): `);
    } while (!validarHorario(horario));
    horarios.push(horario);
}

console.log("Horários validados:");
horarios.forEach(horario => console.log(horario));

// 

//Ex20

let funcionarios = [];

for (let i = 0; i < 80; i++) {
    let matricula = prompt("Digite a matrícula do funcionário: ");
    let nome = prompt("Digite o nome do funcionário: ");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário: "));
    let deducaoINSS = salarioBruto * 0.12;
    let salarioLiquido = salarioBruto - deducaoINSS;
    funcionarios.push({ matricula, nome, salarioBruto, deducaoINSS, salarioLiquido });
}

funcionarios.forEach(func => {
    console.log("Contracheque:");
    console.log(`Matrícula: ${func.matricula}`);
    console.log(`Nome: ${func.nome}`);
    console.log(`Salário bruto: R$ ${func.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${func.deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${func.salarioLiquido.toFixed(2)}`);
    console.log("----------------------------");
});

// 

//Ex21

function pesoIdeal(altura, sexo) {
    if (sexo === "M") {
        return 72.7 * altura - 58;
    } else if (sexo === "F") {
        return 62.1 * altura - 44.7;
    }
    return null;
}

console.log(pesoIdeal(1.75, "M"));
console.log(pesoIdeal(1.60, "F"));

// 

//Ex22

let totalSalario = 0;
let totalFilhos = 0;
let numPessoas = 0;
let maiorSalario = 0;
let pessoasSalarioBaixo = 0;

while (true) {
    let salario = parseFloat(prompt("Digite o salário: "));
    let numFilhos = parseInt(prompt("Digite o número de filhos: "));

    totalSalario += salario;
    totalFilhos += numFilhos;
    numPessoas++;

    if (salario > maiorSalario) {
        maiorSalario = salario;
    }

    if (salario <= 350) {
        pessoasSalarioBaixo++;
    }

    let continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
    if (continuar !== "S") {
        break;
    }
}

let mediaSalario = totalSalario / numPessoas;
let mediaFilhos = totalFilhos / numPessoas;
let percentualSalarioBaixo = (pessoasSalarioBaixo / numPessoas) * 100;

console.log(`Média de salário: R$ ${mediaSalario.toFixed(2)}`);
console.log(`Média de filhos: ${mediaFilhos.toFixed(2)}`);
console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualSalarioBaixo.toFixed(2)}%`);

// 

//Ex23

let matrizIdentidade = [];

for (let i = 0; i < 7; i++) {
    matrizIdentidade[i] = [];
    for (let j = 0; j < 7; j++) {
        matrizIdentidade[i][j] = (i === j) ? 1 : 0;
    }
}

console.log(matrizIdentidade);

// 

//Ex24

let matriz = [
    [1, -1, 2, -3, 4, -5, 6, -7],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, -1, 2, -3, 4, -5, 6, -7],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, -5, -6, -7, -8]
];

let vetorC = [];

for (let i = 0; i < 6; i++) {
    let contagemNegativos = 0;
    for (let j = 0; j < 8; j++) {
        if (matriz[i][j] < 0) {
            contagemNegativos++;
        }
    }
    vetorC.push(contagemNegativos);
}

console.log(vetorC);

// 

//Ex25

let matriz = [];
const prompt = require('prompt-sync')();

for (let i = 0; i < 15; i++) {
    matriz[i] = [];
    for (let j = 0; j < 20; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]: `));
    }
}

for (let j = 0; j < 20; j++) {
    let somaColuna = 0;
    for (let i = 0; i < 15; i++) {
        somaColuna += matriz[i][j];
    }
    console.log(`Soma da coluna ${j}: ${somaColuna}`);
}

// 

//Ex26

let A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
let B = [
    [5, 4, 3, 2, 1],
    [10, 9, 8, 7, 6],
    [15, 14, 13, 12, 11]
];
let P = [];

for (let i = 0; i < 3; i++) {
    P[i] = [];
    for (let j = 0; j < 5; j++) {
        P[i][j] = A[i][j] * B[i][j];
    }
}

console.log(P);

// 

//Ex27

let M = [];

for (let i = 0; i < 6; i++) {
    M[i] = [];
    for (let j = 0; j < 6; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]: `));
    }
}

let A = parseFloat(prompt("Digite o valor de A: "));

let V = [];
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        V.push(M[i][j] * A);
    }
}

console.log(V);

// 

//Ex28

let M = [];
const prompt = require('prompt-sync')();

for (let i = 0; i < 10; i++) {
    M[i] = [];
    for (let j = 0; j < 10; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]: `));
    }
}

let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i < j) {
            somaAcimaDiagonal += M[i][j];
        } else if (i > j) {
            somaAbaixoDiagonal += M[i][j];
        }
    }
}

console.log(`Soma acima da diagonal principal: ${somaAcimaDiagonal}`);
console.log(`Soma abaixo da diagonal principal: ${somaAbaixoDiagonal}`);

// 

//Ex29

let M = [];

for (let i = 0; i < 5; i++) {
    M[i] = [];
    for (let j = 0; j < 5; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]: `));
    }
}

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;

for (let i = 0; i < 5; i++) {
    somaLinha4 += M[4][i];
    somaColuna2 += M[i][2];
    somaDiagonalPrincipal += M[i][i];
    for (let j = 0; j < 5; j++) {
        somaTotal += M[i][j];
    }
}

console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`Soma total: ${somaTotal}`);

// 

//Ex30

let M = [];

for (let i = 0; i < 5; i++) {
    M[i] = [];
    for (let j = 0; j < 5; j++) {
        M[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i}][${j}]: `));
    }
}

let SL = new Array(5).fill(0);
let SC = new Array(5).fill(0);

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

console.log("Matriz M:");
console.log(M);

console.log("Vetor SL:");
console.log(SL);

console.log("Vetor SC:");
console.log(SC);

// 

//Ex31

function exercicio31(A, matriz) {
    let count = 0;
    let matrizX = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === A) {
                count++;
            } else {
                matrizX.push(matriz[i][j]);
            }
        }
    }
    console.log(`Valores iguais a A: ${count}`);
    console.log(`Matriz X: ${matrizX}`);
}

//

//EX32

Dividir cada elemento de uma linha pelo maior elemento da linha
function exercicio32(matriz) {
    let matrizModificada = [];
    for (let i = 0; i < matriz.length; i++) {
        let maior = Math.max(...matriz[i].map(Math.abs));
        matrizModificada[i] = matriz[i].map(el => el / maior);
    }
    console.log("Matriz original:", matriz);
    console.log("Matriz modificada:", matrizModificada);
}

// 

//EX33

function exercicio33(matriz) {
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < matriz.length; i++) {
        somaDiagonalSecundaria += matriz[i][matriz.length - 1 - i];
    }
    let mediaDiagonalSecundaria = somaDiagonalSecundaria / matriz.length;

    for (let i = 0; i < matriz.length; i++) {
        matriz[i][i] *= mediaDiagonalSecundaria;
    }
    console.log("Matriz modificada:", matriz);
}

// 

//EX34

function exercicio34(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let diagonalPrincipal = matriz[i][i];
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] *= diagonalPrincipal;
        }
    }
    console.log("Matriz modificada:", matriz);
}

//

//EX35

function exercicio35(valores) {
    let pares = [];
    let impares = [];
    valores.forEach(valor => {
        if (valor % 2 === 0) {
            pares.push(valor);
        } else {
            impares.push(valor);
        }
        if (pares.length === 5) {
            console.log("Pares:", pares);
            pares = [];
        }
        if (impares.length === 5) {
            console.log("Ímpares:", impares);
            impares = [];
        }
    });
    if (pares.length > 0) console.log("Pares:", pares);
    if (impares.length > 0) console.log("Ímpares:", impares);
}

// 

//EX36

function exercicio36(gabarito, apostas) {
    apostas.forEach(aposta => {
        let acertos = aposta.respostas.reduce((acc, resp, idx) => acc + (resp === gabarito[idx] ? 1 : 0), 0);
        console.log(`Apostador ${aposta.id}: ${acertos} acertos`);
        if (acertos === 13) console.log("Parabéns, tu foi o GANHADOR");
    });
}

// 

//EX37

function exercicio37(gabarito, alunos) {
    alunos.forEach(aluno => {
        let acertos = aluno.respostas.reduce((acc, resp, idx) => acc + (resp === gabarito[idx] ? 1 : 0), 0);
        console.log(`Aluno ${aluno.id}: ${acertos} acertos`);
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    });
}

// 

//EX38

function exercicio38(vetor, identificador) {
    switch (identificador) {
        case 1:
            console.log("Soma dos elementos:", vetor.reduce((acc, val) => acc + val, 0));
            break;
        case 2:
            console.log("Produto dos elementos:", vetor.reduce((acc, val) => acc * val, 1));
            break;
        case 3:
            console.log("Média dos elementos:", vetor.reduce((acc, val) => acc + val, 0) / vetor.length);
            break;
        case 4:
            console.log("Vetor ordenado:", vetor.sort((a, b) => a - b));
            break;
        case 5:
            console.log("Vetor:", vetor);
            break;
    }
}

// 

//EX39

function exercicio39(vetor) {
    let vetorCompactado = vetor.filter(val => val > 0);
    console.log("Vetor compactado:", vetorCompactado);
}

// 

//EX40

function exercicio40(resultadoOficial, apostas) {
    apostas.forEach(aposta => {
        let ganhador = aposta.every((num, idx) => num === resultadoOficial[idx]);
        if (ganhador) {
            console.log("Ganhador:", aposta);
        }
    });
}

// 

//EX41

let pessoa = { nome: "João", idade: 30 };
console.log(pessoa.idade);
pessoa.email = "joao@example.com";
console.log(pessoa);

// 

//EX42

function propriedadesArray(obj) {
    let novoObj = {};
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            novoObj[key] = obj[key];
        }
    }
    return novoObj;
}

// 

//EX43

function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// 

//EX44

function contarStrings(obj) {
    return Object.values(obj).filter(val => typeof val === "string").length;
}

//

//EX45

function contarOcorrencias(arr) {
    return arr.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
}

// 

//EX46

function sumarizarVendas(vendas) {
    return vendas.reduce((acc, venda) => {
        acc[venda.vendedor] = (acc[venda.vendedor] || 0) + venda.valor;
        return acc;
    }, {});
}

// 

//EX47

function transformarObjeto(obj, fn) {
    let novoObj = {};
    for (let key in obj) {
        novoObj[key] = fn(obj[key]);
    }
    return novoObj;
}

// 

//EX48

function combinarInventarios(invA, invB) {
    let combinado = { ...invA };
    for (let item in invB) {
        combinado[item] = (combinado[item] || 0) + invB[item];
    }
    return combinado;
}

// 

//EX49

function categorizarTransacoes(transacoes) {
    return transacoes.reduce((acc, transacao) => {
        if (!acc[transacao.categoria]) {
            acc[transacao.categoria] = { transacoes: [], subtotal: 0 };
        }
        acc[transacao.categoria].transacoes.push(transacao);
        acc[transacao.categoria].subtotal += transacao.valor;
        return acc;
    }, {});
}

*/

//EX50

let hoteis = [];
let reservas = [];

function adicionarHotel(id, nome, cidade, quartosTotais) {
    hoteis.push({ id, nome, cidade, quartosTotais, quartosDisponiveis: quartosTotais });
}

function buscarHoteisPorCidade(cidade) {
    return hoteis.filter(hotel => hotel.cidade === cidade);
}

function fazerReserva(idHotel, nomeCliente) {
    let hotel = hoteis.find(h => h.id === idHotel);
    if (hotel && hotel.quartosDisponiveis > 0) {
        let idReserva = reservas.length + 1;
        reservas.push({ idReserva, idHotel, nomeCliente });
        hotel.quartosDisponiveis--;
        return `Reserva realizada com sucesso. ID da reserva: ${idReserva}`;
    }
    return "Reserva não realizada. Quartos indisponíveis.";
}

function cancelarReserva(idReserva) {
    let reserva = reservas.find(r => r.idReserva === idReserva);
    if (reserva) {
        let hotel = hoteis.find(h => h.id === reserva.idHotel);
        hotel.quartosDisponiveis++;
        reservas = reservas.filter(r => r.idReserva !== idReserva);
        return "Reserva cancelada com sucesso.";
    }
    return "Reserva não encontrada.";
}

function listarReservas() {
    return reservas.map(reserva => {
        let hotel = hoteis.find(h => h.id === reserva.idHotel);
        return { ...reserva, nomeHotel: hotel.nome, cidade: hotel.cidade };
    });
}
