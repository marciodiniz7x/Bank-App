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
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const ano = pegaData.getFullYear()

const semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

data.innerHTML = `${semana[diaSemana]}, ${diaMes} ${meses[mes]}, ${ano} `