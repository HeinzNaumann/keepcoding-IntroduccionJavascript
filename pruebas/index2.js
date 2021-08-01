const teams = [
  "AC Milan",
  "Inter Milan",
  "Juventus",
  "Torino",
  "Bologna",
  "Parma",
  "Roma AC",
  "Lazio",
  "Fiorentina",
];

class League {
  constructor(name, teams = [], config = {}) {
    this.name = name;
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
      matchesDraw: 0,
      matchesLost: 0,
    };
  }
}

// LIGA DE FUTBOL
class FootballLeague extends League {
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
    // llamar al método padre
    const customizedTeam = super.customizeTeam(teamName);
    // devolver un objeto con los mismos datos del padre
    // además añadir propiedades de points, goalsFor y goalsAgainst
    return {
      points: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      ...customizedTeam,
    };
  }
}

// const configFootballLeague = {
//     rounds: 2,
//     pointsPerWin: 10,
//     pointsPerDraw: 2,
//     pointsPerLose: -1
// }

// const playStationFootballLeague = {
//     rounds: 1,
//     pointsPerWin: 2,
//     pointsPerDraw: 0,
//     pointsPerLose: -2
// }

// const anotherFootballLeague = {
//     pointsPerWin: 2,
//     pointsPerDraw: 0,
//     pointsPerLose: -2
// }

const serieA = new FootballLeague("Serie A", teams);

console.log(`The League name is ${serieA.name}`);
// Mostrar los equipos inscritos por pantalla.
for (let i in serieA.teams) {
  const team = serieA.teams[i];
  console.log(team);
}

// OTRO CASO DE LIGA
// class ChessLeague extends League {
//     constructor(rounds = 1, movesDone = 0, timeToWin = 0) {
//         super('siempre un string constante');
//         this.movesDone = movesDone;
//         this.timeToWin = timeToWin;
//     }
// }

// const ligaAjedrez = new ChessLeague();
// console.log(ligaAjedrez);

// equipos
// jornadas
// partidos
// lugares
// puntos
// clasificacion


// const equiposGanadoresOctavosObj = {};

// const reducer = function (x, goles) {
//     if (!x[goles]) {
//         x[goles] = 0;
//     } else {
//         x[goles] = x[goles] + 1;
//     }

//     return x;
// };



// const equiposGanadoresOctavosObjeto = equiposGanadoresOctavos.reduce(reducer, equiposGanadoresOctavosObj);

// console.log(equiposGanadoresOctavosObjeto);



// const keys = Object.keys(equiposGanadoresOctavosObjeto)[1][0];

// console.log(keys);


// for (let i = 0; i < equiposGanadoresOctavosObjeto.length; i = i + 2) {
//     const equipolocalOctavos = equiposGanadoresOctavosObjeto[i];
//     const equipovisitanteOctavos = equiposGanadoresOctavosObjeto[i + 1];

//     equipolocalOctavos.goles = Math.floor(Math.random() * 6);
//     equipovisitanteOctavos.goles = Math.floor(Math.random() * 6);
//     console.log(equipolocalOctavos);
//     console.log(equipovisitanteOctavos);
//     if (equipolocalOctavos.goles > equipovisitanteOctavos.goles) {
//         console.log(`${ equipolocalOctavos.nombre } ${ equipolocalOctavos.goles } - ${ equipovisitanteOctavos.goles } ${ equipovisitanteOctavos.nombre } => ${ equipolocal.nombre }`)
//         equiposGanadoresOctavos.push(equipolocalOctavos.nombre);

//     } else {
//         return;
//     }
// }