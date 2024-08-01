function validarnumero() {
    let numero = document.getElementById("numero").value;
    let mensagem = document.getElementById("mensagem");

    if (numero === "") {
        mensagem.textContent = "Por favor, insira um némero";
        mensagem.style.color = "red";

    } else {
        numero = parseInt(numero);

        if (numero > 10) {
            mensagem.textContent = "O número é maior do que 10";
            mensagem.style.color = "green";

        } else
            if (numero > 5) {
                mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
                mensagem.style.color = "orange";

            } else {
                mensagem.textContent = "O número é 5 ou menor";
                mensagem.style.color = "blue";
            }

    }
}