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

class Mundial {
  constructor(name, teams = [], config = {}) {
    this.name = name;
    //this.teams = [];
    //this.rounds = config.rounds;
    this.matchDaySchedule = [];
    this.setup(config);
    this.setupTeams(teams);
  }
  setup(config) {
    const defaultConfig = { rounds: 1 };
    this.config = Object.assign(defaultConfig, config);
  }
  setupTeams(teamNames) {
    this.teams = [];
    for (const teamName of teamNames) {
      const team = this.customizeTeam(teamName);
      this.teams.push(team);
    }
  }

  customizeTeam(teamName) {
    return {
      name: teamName,
      matchesWon: 0,
      mathesDraw: 0,
      matchesLost: 0,
    };
  }
}
// Eurocopa 2020
class Eurocop extends Mundial {
  constructor(name, teams = [], config) {
    super(name, teams, config);
  }
  setup(config) {
    const defaultConfig = {
      rounds: 1,
      pointsPerWin: 3,
      pointsPerDraw: 1,
      pointsPerLose: 0,
    };
    this.config = Object.assign(defaultConfig, config);
  }

  customizeTeam(teamName) {
    const customizedTeam = super.customizeTeam(teamName);
    return {
      points: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      ...customizedTeam,
    };
  }
}

// const configEurocop = {
//   rounds: 2,
//   pointsPerWin: 3,
//   pointsPerDraw: 1,
//   pointsPerLose: 0,
// };

//Equipos
//Eliminatorias
//Partidos
//Goles

const Eurocopa = new Eurocop("Eurocopa 2020", teams);

for (let i in Eurocopa.teams) {
  const team = Eurocopa.teams[i];
  console.log(team);
}

console.log("------------- Empezamos la Eurocopa ---------------");

key = `p${index}`;

let participants = fooTeams;

for (let i in participants) {
  matches.push({ home: participants[i], key: `p${i}` });
}

matches = [
  { home: "A", away: "B", matchName: key },
  { home: "C", away: "D", matchName: `p2` },
];
