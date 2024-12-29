const form = document.getElementById('form-contato');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
});

function adcionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('tel-contato');

    if (telefones.includes(inputTelefoneContato.value)){
        alert(`O telefone ${inputTelefoneContato.value} já foi inserido!`);
    }else {
        telefones.push(inputTelefoneContato.value);
        nomes.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}