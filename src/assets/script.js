




function Enviar() {

  var n = document.getElementById('nome')
  var s = document.getElementById('sobrenome')
  var dinheiro = document.getElementById('salario')
  var setor = document.getElementById('setor')

  var nome = String(n.value)
  var sobrenome = String(s.value)
  var salario = String(dinheiro.value)
  var setor = String(setor.value)

  if (nome == "" || sobrenome == "" || salario == "" || setor == "") {



    alert("Campos obrigatótios não preenchidos!")



  } else {
    //cria a tabela pegando o id da tabela e suas tags com createElement
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    //
    table.appendChild(thead);
    table.appendChild(tbody);

    // aqui adiciona a tabela na tag escolhida no html, nessa tag que vai aparecer a tabela.
    document.getElementById('body').appendChild(table);

    // associa a variaveis as tags da tabela
    let row_1 = document.createElement('tr');
    //
    let heading_1 = document.createElement('th');
    //aqui adiciona dados na linha da tabela
    heading_1.innerHTML = `${nome}`;
    //pode ir adicionando quantas ligas que quiser
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = `${sobrenome}`;

    let heading_3 = document.createElement('th');
    heading_3.innerHTML = `R$${salario}`;

    let heading_4 = document.createElement('th');
    heading_4.innerHTML = `${setor}`;

    let heading_5 = document.createElement('th');
    heading_5.innerHTML = `<button onclick="editItem()"><i class='bx bx-edit'></i></button>`

    let heading_6 = document.createElement('th');
    heading_6.innerHTML = `<button onclick="deleteItem()"><i class='bx bx-trash'></i></button>`

    //para cada criada precisa adicionar a propriedade appendchild adicionado as linha.
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    thead.appendChild(row_1);
    //aqui adiciona toda tabela criada na tag escolida no html
    document.getElementById('body').appendChild(row_1);

    //aqui o value limpa os input para serem digitados de novo.
    var n = document.getElementById('nome').value = ""
    var s = document.getElementById('sobrenome').value = ""
    var dinheiro = document.getElementById('salario').value = ""
    var setor = document.getElementById('setor').value = ""
  }

}










