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

class Eurocup {
  constructor(name, teams = [], rounds = 1) {
    this.name = name;
    this.teams = teams;
    this.rounds = rounds;
    this.matchDaySchedule = [];
  }
}

//Equipos
//Eliminatorias
//Partidos
//Goles

for (team of teams) {
  console.log(team);
}

console.log("------------- Empezamos la Eurocopa ---------------");
