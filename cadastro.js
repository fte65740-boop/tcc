const dia = document.getElementById("dia");
for (let d = 1; d <= 31; d++) {
    dia.innerHTML += `<option value="${d}">${d}</option>`;
}

const ano = document.getElementById("ano");
const anoAtual = new Date().getFullYear();
for (let a = anoAtual; a >= 1924; a--) {
    ano.innerHTML += `<option value="${a}">${a}</option>`;
}





const nome = document.getElementById("nome");

nome.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});





const ddd = document.getElementById("ddd");

ddd.addEventListener("input", function() {
    let valor = this.value.replace(/\D/g, "");
    this.value = valor
})





const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function() {
    let valor = this.value.replace(/\D/g, "");    // remove tudo que não é número

    if (valor.length <= 5) {
        this.value = valor;
    } else {
        this.value = valor.slice(0, 5) + "-" + valor.slice(5, 9);
    }
});





const cpf = document.getElementById("cpf");

cpf.addEventListener("input", function() {
    let valor = this.value.replace(/\D/g, "");        // remove tudo que não é número

    if (valor.length <= 3) {
        this.value = valor;
    } else if (valor.length <= 6) {
        this.value = valor.slice(0, 3) + "." + valor.slice(3);
    } else if (valor.length <= 9) {
        this.value = valor.slice(0, 3) + "." + valor.slice(3, 6) + "." + valor.slice(6);
    } else {
        this.value = valor.slice(0, 3) + "." + valor.slice(3, 6) + "." + valor.slice(6, 9) + "-" + valor.slice(9, 11);
    }
}); 

