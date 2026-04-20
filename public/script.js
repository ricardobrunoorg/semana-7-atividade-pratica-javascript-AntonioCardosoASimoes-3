function pedirNumero(mensagem) {
    let valor;

    while (true) {
        valor = Number(prompt(mensagem));

        if (!isNaN(valor)) {
            return valor;
        } else {
            alert("Digite um número válido!");
        }
    }
}

let nome = prompt("Digite seu nome:");

let renda = pedirNumero("Digite sua renda mensal:");

let qtdDespesas = pedirNumero("Quantas despesas deseja informar? (1 a 5)");

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = pedirNumero(`Digite o valor da despesa ${i}:`);
    totalDespesas += despesa;
}

let sobra = renda - totalDespesas;
let mensagem = "";

if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    let percentualSobra = sobra / renda;

    if (percentualSobra >= 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Classificação: ${mensagem}
`;

// Exibir
alert(resultado);
console.log(resultado);