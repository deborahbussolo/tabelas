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
//CLASSE CARGO
class Cargo {
    constructor() {
        this.id = 1;
        this.arrayCargos = [];
    }

//CHAMADA DAS FUNCÕES PARA SALVAR O VALOR DO INPUT
    salvar() {
        let cargo = this.lerDados();

        if(this.validaCampo(cargo)) {
            this.adicionar(cargo);
        }

        this.listaTabela();
        this.cancelar();
    }

// CRIANDO A LISTA DE FORMA DINAMICA
    listaTabela() {
        let tbody = document.getElementById('tbody_cargo');
        tbody.innerText = '';
        
    //CRIANDO LINHAS E COLUNAS
        for(let i = 0; i < this.arrayCargos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_cargo = tr.insertCell();
            let td_salario = tr.insertCell();
            let td_acoes = tr.insertCell();

            var elem = document.createElement('select')
        //ADICIONANDO DINAMICAMENTE AS INFORMAÇÕES DAS CELULAS
            td_id.innerText = this.arrayCargos[i].id;
            td_cargo.innerText = this.arrayCargos[i].cargo;
            td_salario.innerText = 'R$ ' + this.arrayCargos[i].salario;
        
        //ADICIONANDO CLASSE DE FORMA DINAMICA
            td_id.classList.add('center');
            td_acoes.classList.add('center');

        //ELEMENTE PARA APAGAR A LINHA
            let imgTrash = document.createElement('img');
            imgTrash.src = '/Page2/img/trash.png';
            imgTrash.setAttribute('onclick','cargo.deletar('+this.arrayCargos[i].id +')');
            //<td><img></td>
            td_acoes.appendChild(imgTrash);

            console.log(this.arrayCargos)
        }
    }
//ADICIONANDO O CARGO PARA A LISTA
    adicionar(cargo) {
        this.arrayCargos.push(cargo);
        this.id++;
    }

//LENDO OS DADOS DO INPUT
    lerDados() {
        let cargo = {}

        cargo.id = this.id;
        cargo.cargo = document.getElementById('cargo').value;
        cargo.salario = document.getElementById('salario').value;

        return cargo;
    }

//APAGA OS VALORES QUE ESTÃO NO INPUT
    cancelar() {
        document.getElementById('cargo').value = '';
        document.getElementById('salario').value = '';
    }

//APAGA A LINHA SELECIONADA, PELO ID
    deletar(id) {
        if((swal('ITEM '+id+' DELETADO !'))){
            for(let i = 0; i < this.arrayCargos.length; i++){
                if(this.arrayCargos[i].id == id){
                    this.arrayCargos.splice(i , 1);
                    tbody_cargo.deleteRow(i);
                }
            }
        }
    }

//CONFERE SE O CAMPO ESTÁ PREENCHIDO OU NÃO
    validaCampo(cargo) {
        let msg = '';

        if(cargo.cargo == '') {
            msg += '- Informe o NOME do cargo.\n';
        }

        if(cargo.salario == '') {
            msg += '\n- Informe o VALOR do salario.\n';
        }

        if(msg != '') {
            swal(msg);
            return false
        }

        return true;
    }
}

var cargo = new Cargo();