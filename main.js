const meses = ['janeiro','fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'setembro', 'outubro', 'novembro', 'dezembro'];
const tableDay = document.getElementById('dias');
let date = new Date();
const mesatual = date.getMonth();
const ano = 2024;

function pegarmes(mesatual, meses) {
    const mesescrito = meses[mesatual];
    console.log(mesescrito);
    const mesdisplay = document.querySelector('.mesatual');
    mesdisplay.innerHTML = mesescrito;
}

function modais(dias) {
    dias.addEventListener("click", function() {
        const diaSelecionado = parseInt(dias.innerHTML);
        const key = "Evento_" + diaSelecionado;
        const eventosExist = JSON.parse(localStorage.getItem(key)) || [];

        const modal = document.createElement('div');
        modal.classList.add('modal');
        const countedo = document.querySelector('.conteudo');
        countedo.appendChild(modal);

        const adicionarumatarefa = document.createElement('h3');
        adicionarumatarefa.classList.add('texto');
        modal.appendChild(adicionarumatarefa);

        const divBotoes = document.createElement('div');
        divBotoes.classList.add('botoes-container');
        modal.appendChild(divBotoes);


        const botaocreate = document.createElement('button');
        botaocreate.innerText = 'Criar';
        botaocreate.classList.add('botaocriar');

        const botaofechar = document.createElement('button');
        botaofechar.innerText = 'Fechar';
        botaofechar.classList.add('botaofechar');
        modal.appendChild(botaofechar);

        divBotoes.appendChild(botaocreate);
        divBotoes.appendChild(botaofechar);

        botaocreate.addEventListener('click', function() {
            const modal2 = document.createElement('div');
            modal2.classList.add('modal2');
            const conteudo = document.querySelector('.conteudo');
            conteudo.appendChild(modal2);

            const title2 = document.createElement('h3');
            title2.innerHTML = 'Adicione um dever';
            title2.classList.add('texto2');
            modal2.appendChild(title2);

            const input = document.createElement('textarea');
            input.classList.add('input');
            modal2.appendChild(input);

            const botaocreate2 = document.createElement('button');
            botaocreate2.innerText = 'Criar';
            botaocreate2.classList.add('botaocriar2');
            modal2.appendChild(botaocreate2);

            const botaofechar2 = document.createElement('button');
            botaofechar2.innerText = 'Fechar';
            botaofechar2.classList.add('botaocriar3');
            modal2.appendChild(botaofechar2);

            modal.style.visibility = 'hidden';

            botaofechar.addEventListener('click', function() {
                modal.remove(); 
            });

            botaofechar2.addEventListener('click', function() {
                modal2.remove();
            });

            // adição do botão create2 para criar o localStorage
            botaocreate2.addEventListener('click', function() {
                
            });
        });


        // Condição para verificar se eu possuo eventos registrados no localStorage
        
    });
}

function pegardiasmes(ano, mes) {
    const primeirodiasemana = new Date(ano, mes, 1).getDay() - 1; 
    const ultimodiames = new Date(ano, mes + 1, 0).getDate(); 

    for (let i = -primeirodiasemana, index = 0; i < (42 - primeirodiasemana); i++, index++) {
        const dt = new Date(ano, mes, i);
        const dayTable = tableDay.getElementsByTagName('td')[i];
        dayTable.innerHTML = dt.getDate();

        // retirei a função criarEvento
        if (i < 1) {
            dayTable.classList.add('mes-anterior');
        }
        if (i > ultimodiames) {
            dayTable.classList.add('mes-posterior');
        }
        modais(dayTable);
    }
}

pegardiasmes(ano, mesatual);
pegarmes(mesatual, meses);
