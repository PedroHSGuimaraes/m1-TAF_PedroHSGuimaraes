// escolhi let para valores que eram diferente entre os generos
//escolhi o const para valores em comum entre os generos que nao iriam mudar

let gender = process.argv[2]; // Genero
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra
const abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho
let passed = false;
/*Aqui eu coloco uma condição caso o genero for homem ira  começa o meu fluxo, e para continuar o meu fluxo coloco outra condição. Nessa condição utilizo o conceito de bootelenos e operadores logicos   para que so  ira passar no teste quem tiver comprindo todos os requisitos colocado no codigo abaixo. Exemplor:
caso a pessoa nao atingi-se o valor minimo de 6 do numero de barras ou  o tempo minimo de 15 segudos das repetições da barra   ele nao passaria , lembrando que para passar no teste tem que cumprir todos os requisitos minimos imposto no codigo */
if (gender === "male") {
  if (
    height >= 1.7 &&
    (barReps >= 6 || barSeconds >= 15) &&
    abs >= 41 &&
    ((runDistance >= 3000 && runTime <= 720) ||
      (runDistance >= 5000 && runTime <= 1200)) &&
    ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30)
  ) {
    passed = true;
  }
  /* Quando a opção nao for igual a homem o fluxo ira "desviar" para opçao feminino devido a condição se não tendo em vista a mesma regra ao do homem  e tendo que atingir todos os requisitos minios para passar  */
} else if (gender === "female") {
  if (
    height >= 1.6 &&
    (barReps >= 5 || barSeconds >= 12) &&
    abs >= 41 &&
    ((runDistance >= 4000 && runTime <= 900) ||
      (runDistance >= 6000 && runTime <= 1320)) &&
    ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30)
  ) {
    passed = true;
  }
}
console.log(passed);
