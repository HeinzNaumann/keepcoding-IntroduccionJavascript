class Eurocopa {
    constructor(name, teams = [], playoff) {
        this.teams = teams;
        this.name = name;
        this.customizeTeam(teams);
        this.playoff = playoff;
    }
    customizeTeam() {
        this.teams = [];
        const goals = {
            goalsFor: 0,
            goalsAgainst: 0,
        };
    }
}

// funcion random
// Q1 partido entre dos equipos
// Q2 partido entre dos equipos etc...
// función jugar octavoas de final tendras que jugar partidos tal tal q1 q2
// función jugar cuartos de final tendras que jugar partidos tal 1
// partido cantidad
// si quedan dos partidos
// escribir comentarios
// array sacar del array el que pierde
// array filter para sacar un equipo
// array slice para dividir
// funcion play
// array de filtro para eliminar equipos
// find para encontrar el partido 


const partido

const euro2021 = new Eurocopa("Eurocopa 2021", teams);

console.log(euro2021.teams);
