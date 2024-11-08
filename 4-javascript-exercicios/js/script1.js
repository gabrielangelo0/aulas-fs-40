document.getElementById("my-form").addEventListener("submit", function(ev) {
    ev.preventDefault();

    var nome = document.getElementById("nome").value;
    var salario = document.getElementById("salario").value;
    var totalVendas = document.getElementById("total-vendas").value;
    var resultado = document.getElementById("resultado");

    var comissao = Number(totalVendas) * 0.15;
    var salarioFinal = parseFloat(salario) + parseFloat(comissao);
    var salarioFormatado = salarioFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    resultado.innerHTML = "O salário final de " + nome + " é " + salarioFormatado;
    
    document.getElementById("nome").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("total-vendas").value = "";

});
