//DICIONARIO
var dict = new Map();

//INFORMAÇÕES GERAIS
const nome = [
    'Alana Ferreira',
     'Carolina Mendes',
     'Eloah Mendes',
     'Pietro Pires',
     'Clarice Peixoto',
     'Maria Eduarda Ferreira',
     'Bryan da Rocha',
     'Kevin Ferreira',
     'Stella Novaes',
     'Carolina Nascimento'
]

const cpf =[
    '432.378.838-08',
    '160.651.371-03',
    '671.784.538-42',
    '005.056.542-10',
    '735.252.344-81',
    '034.644.482-23',
    '489.741.964-68',
    '067.355.004-72',
    '425.373.726-97',
    '246.073.101-75',
]

const idade =[
    '25',
    '82',
    '67',
    '54',
    '19',
    '36',
    '29',
    '68',
    '51',
    '18',
]

const telefone = [
     '(92) 2251-9374',
     '(62) 2999-4656',
     '(32) 2876-8574',
     '(13) 2443-4436',
     '(99) 2475-0553',
     '(65) 2497-2286',
     '(79) 3476-4318',
     '(66) 2840-0198',
     '(44) 2607-1873',
     '(68) 2532-2215'
]

//ADICIONANDO AS INFORMAÇÕES EM UM DICIONARIO 
for(let i = 0; i < 10; i++){
    dict.set(nome[i], [cpf[i],idade[i],telefone[i]])
}

//ORGANIZANDO EM ORDEM ALFABETICA
nome.sort();

//CLASSE PESSOA
class Pessoa {
    constructor() {
        this.i = 0;
    }

//MOSTRA APENAS UMA PESSOA NA LISTA POR VEZ
    gerar1() {
        if(this.i < 10){
            this.listaTabela(this.i);
            this.i++; 
        }
    }
//MOSTRA TODAS AS PESSOAS NA LISTA
    gerarAll() {
        if(this.i < 10)
        for(this.i = this.i; this.i < 10; this.i++){
            this.listaTabela(this.i);
        }
    }

// CRIANDO A LISTA DE FORMA DINAMICA
    listaTabela(i) {

        let tbody = document.getElementById('tbody');
    //ADICIONANDO LINHAS E COLUNAS
        let tr= tbody.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_cpf = tr.insertCell();
        let td_idade = tr.insertCell();
        let td_telefone = tr.insertCell();

    //ADICIONANDO AS INFORMAÇÕES DAS CELULAS
        td_id.innerText = i+1;
        td_nome.innerText = nome[i];
        td_cpf.innerText = dict.get(nome[i])[0];
        td_idade.innerText = dict.get(nome[i])[1];
        td_telefone.innerText = dict.get(nome[i])[2];

    //ADICIONANDO CLASSE DE FORMA DINAMICA
        td_idade.classList.add('center');
        td_id.classList.add('center');
        }
}

var pessoa = new Pessoa()
