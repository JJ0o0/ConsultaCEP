function consultarCEP(event) {
    event.preventDefault();

    const input_cep = document.querySelector("#input_cep").value.replace("-", "");
    coletarDados(input_cep);
}

function mostrarDados(cep) {
    const output_cep_div = document.getElementById("info_div");
    const output_cep = document.getElementById("info");

    output_cep_div.style.display = "block";
    output_cep.innerHTML = `
    Logradouro: ${cep.logradouro}<br>
    Bairro: ${cep.bairro}<br>
    Localidade: ${cep.localidade}<br>
    Unidade Federal: ${cep.uf}<br>
    Estado: ${cep.estado}<br>
    Região: ${cep.regiao}<br>
    DDD: ${cep.ddd}
    `;
}

async function coletarDados(input) {
    const cep = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(
        (Response) => Response.json()
    );

    mostrarDados(cep);
}