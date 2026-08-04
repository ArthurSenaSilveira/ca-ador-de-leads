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
    //console.log(empresas);

    //console.log(empresas.length);
});


// =========================
// Funções
// =========================



function renderizarEmpresas() {
    listaEmpresas.innerHTML = "";

    empresas.forEach(empresa => { 
        console.log(empresa);
    
});
}