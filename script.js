// Seletor de elementos
const data = document.querySelector('.data');


//////////////////
///// Script /////

// Datas
const pegaData = new Date();
const diaSemana = pegaData.getDay();
// método slice para adicionar um 0 quando o número tiver apenas 1 dígito
const diaMes = ("00" + pegaData.getDate()).slice(-2);
//
const mes = pegaData.getMonth();

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

data.innerHTML = `${semana[diaSemana]}, ${diaMes} `