// =========================
// Variáveis
// =========================


const nomeEmpresa = document.getElementById("nomeEmpresa");
const cidade = document.getElementById("cidade");
const telefone = document.getElementById("telefone");
const site = document.getElementById("site");
const status = document.getElementById("status");

let empresas = [ 
    
];


const form = document.getElementById("form1");
const listaEmpresas = document.getElementById("listaEmpresas");


// =========================
// Eventos
// 




form.addEventListener('submit', (event) => {
    event.preventDefault();

    const empresa = {
        nomeEmpresa: nomeEmpresa.value,
        cidade: cidade.value,
        telefone: telefone.value,
        site: site.value,
        status: status.value
    };

    empresas.push(empresa);
    renderizarEmpresas();
});


// =========================
// Funções
// =========================



function renderizarEmpresas() {
    listaEmpresas.innerHTML = "";

    empresas.forEach(empresa => { 
        const linha = document.createElement("tr");
        
        const colunaNome = document.createElement("td");
        
        colunaNome.textContent = empresa.nomeEmpresa;

        linha.appendChild(colunaNome);
        
        const colunaCidade = document.createElement("td");

        colunaCidade.textContent = empresa.cidade;

        linha.appendChild(colunaCidade);

        const colunaTelefone = document.createElement("td");

        colunaTelefone.textContent = empresa.telefone;

        linha.appendChild(colunaTelefone);

        const colunaSite = document.createElement("td");

        colunaSite.textContent = empresa.site;

        linha.appendChild(colunaSite);

        const colunaStatus = document.createElement("td");

        colunaStatus.textContent = empresa.status;

        linha.appendChild(colunaStatus);


       
        listaEmpresas.appendChild(linha);
});
}