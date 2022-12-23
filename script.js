// Seletor de elementos
const data = document.querySelector('.data');
const hora = document.querySelector('.hora');
const hora2 = document.querySelector('.hora2');

const login = document.querySelector('.login-area');
const loginSobreposto = document.querySelector('.nome-area-sobreposto');

//////////////////
///// Script /////

// Datas
const pegaData = new Date();
const diaSemana = pegaData.getDay();
// método slice para adicionar um 0 quando o número tiver apenas 1 dígito
const diaMes = ("00" + pegaData.getDate()).slice(-2);
//

const mes = pegaData.getMonth();
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const ano = pegaData.getFullYear()

const semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

// Relógio
const pegaHora = ("00" + pegaData.getHours()).slice(-2);
const pegaMinuto = ("00" + pegaData.getMinutes()).slice(-2);

//Substituição dos valores
data.innerHTML = `${semana[diaSemana]}, ${diaMes} ${meses[mes]}, ${ano} `;
hora.innerHTML = `${pegaHora}:${pegaMinuto}`;
hora2.innerHTML = `${pegaHora}:${pegaMinuto}`;


// Eventos
loginSobreposto.addEventListener('');