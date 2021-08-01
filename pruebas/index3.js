const teams = [
  "España",
  "Italia",
  "Alemania",
  "Polonia",
  "Ucrania",
  "Belgica",
  "Inglaterra",
  "Suiza",
  "Francia",
  "Portugal",
  "Gales",
  "Dinamarca",
  "Austria",
  "Holanda",
  "Islandia",
  "Escocia",
];

for (let i = 0; i < teams.length; i = i + 2) {
  const equipolocal = teams[i];
  const equipovisitante = teams[i + 1];
  console.log(equipolocal);
  console.log(equipovisitante);
}
console.log("------------todos los equipos---------------");
teams.forEach(team => {
  console.log(team);
});


function start() {
  console.log("EMPIEZA LA EUROCOPA");
  // Para cada playoff 

  // para cada partido

  // Jugar el partido
  // mostar como queda la clasificación

}



start();


function play() {
  const goals = Math.floor(Math.random() * 10);
  const awayGoals = Math.floor(Math.random() * 10);
  return {
    homeTeam: equipolocal,
    homeGoals,
    awayTeam: equipovisitante,
    awayGoals
  }
}



play();
