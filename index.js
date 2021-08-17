const equipos = [
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



class Eurocopa {
    constructor(nombre, equipos = [], config = {}) {
        this.nombre = nombre;
        //this.equipos = equipos;
        this.eliminatorias = config.eliminatorias;
        this.setupTeams(equipos);
    }


    setupTeams(nombreEquipos) {
        this.equipos = [];

        for (const nombreEquipo of nombreEquipos) {
            const equipo = {
                nombre: nombreEquipo,
                goles: 0
            }

            this.equipos.push(equipo);
        }
    }



}

const configEurocopa = {
    eliminatorias: 5
}


const eurocopa2020 = new Eurocopa("Eurocopa 2021", equipos, configEurocopa)

console.log("========================================================");
console.log("=========== COMIENZA LA EUROCOPA 2020 ==================");
console.log("========================================================");

console.log("=========== Empiezan los octavos de final ==============");

const equiposGanadoresOctavos = [];
for (let i = 0; i < eurocopa2020.equipos.length; i = i + 2) {
    const equipolocal = eurocopa2020.equipos[i];
    const equipovisitante = eurocopa2020.equipos[i + 1];

    equipovisitante.goles = Math.floor(Math.random() * 6);
    equipolocal.goles = Math.floor(Math.random() * 6);


    if (equipolocal.goles > equipovisitante.goles) {
        console.log(`${equipolocal.nombre} ${equipolocal.goles} - ${equipovisitante.goles} ${equipovisitante.nombre} => ${equipolocal.nombre}`)
        equiposGanadoresOctavos.push(equipolocal.nombre);


    } else if (equipolocal.goles < equipovisitante.goles) {
        console.log(`${equipovisitante.nombre} ${equipovisitante.goles} - ${equipolocal.goles} ${equipolocal.nombre} => ${equipovisitante.nombre}  `)
        equiposGanadoresOctavos.push(equipovisitante.nombre);


    } else if (equipolocal.goles == equipovisitante.goles) {
        do {
            equipovisitante.goles = Math.floor(Math.random() * 6);
            equipolocal.goles = Math.floor(Math.random() * 6);
        }
        while (equipolocal.goles == equipovisitante.goles)
        console.log(`${equipovisitante.nombre} ${equipovisitante.goles} - ${equipolocal.goles} ${equipolocal.nombre} => ${equipovisitante.nombre} `)
        if (equipolocal.goles < equipovisitante.goles) {
            equiposGanadoresOctavos.push(equipolocal.nombre);


        } else {
            equiposGanadoresOctavos.push(equipovisitante.nombre);

        }
    }
}

console.log("=========== Empiezan los cuartos de Final ==============");

const arr = equiposGanadoresOctavos;
const equiposGanadoresOctavosObj = new Object();
Array.prototype.push.apply(equiposGanadoresOctavosObj, arr);
//console.log(equiposGanadoresOctavosObj);    // { '0': 'a', '1': 'b', '2': 'c', length: 3 }
//console.log(equiposGanadoresOctavosObj[2]); // c


const style = {
    goles: 0
};
const equiposCuartos = {
    ...equiposGanadoresOctavosObj,
    ...style
};
//console.log(equiposCuartos.goles);


const equiposGanadoresCuartos = [];
for (let i = 0; i < equiposCuartos.length; i = i + 2) {

    const equipolocalCuartos = equiposCuartos[i];
    const equipovisitanteCuartos = equiposCuartos[i + 1];

    let golesVisitante = {
        golesVisitante: Math.floor(Math.random() * 6),

    };
    let golesLocal = {
        golesLocal: Math.floor(Math.random() * 6)
    }
    const equiposCuartosFinalVisitante = {
        equipovisitanteCuartos,
        ...golesVisitante
    };
    const equiposCuartosFinalLocal = {
        equipolocalCuartos,
        ...golesLocal
    };


    if (equiposCuartosFinalLocal.golesLocal > equiposCuartosFinalVisitante.golesVisitante) {
        console.log(`${equiposCuartosFinalLocal.equipolocalCuartos} ${equiposCuartosFinalLocal.golesLocal} - ${equiposCuartosFinalVisitante.golesVisitante} ${equiposCuartosFinalVisitante.equipovisitanteCuartos} => ${equiposCuartosFinalLocal.equipolocalCuartos}`)
        equiposGanadoresCuartos.push(equiposCuartosFinalLocal.equipolocalCuartos);

    }
    else if (equiposCuartosFinalLocal.golesLocal < equiposCuartosFinalVisitante.golesVisitante) {
        console.log(`${equiposCuartosFinalLocal.equipolocalCuartos} ${equiposCuartosFinalLocal.golesLocal} - ${equiposCuartosFinalVisitante.golesVisitante} ${equiposCuartosFinalVisitante.equipovisitanteCuartos} => ${equiposCuartosFinalVisitante.equipovisitanteCuartos}`)
        equiposGanadoresCuartos.push(equiposCuartosFinalVisitante.equipovisitanteCuartos);

    } else if (equiposCuartosFinalLocal.golesLocal == equiposCuartosFinalVisitante.golesVisitante) {
        do {
            equiposCuartosFinalVisitante.golesVisitante = Math.floor(Math.random() * 6);
            equiposCuartosFinalLocal.golesLocal = Math.floor(Math.random() * 6);

        }
        while (equiposCuartosFinalLocal.golesLocal == equiposCuartosFinalVisitante.golesVisitante)
        console.log(`${equiposCuartosFinalLocal.equipolocalCuartos} ${equiposCuartosFinalLocal.golesLocal} - ${equiposCuartosFinalVisitante.golesVisitante} ${equiposCuartosFinalVisitante.equipovisitanteCuartos} => ${equiposCuartosFinalVisitante.equipovisitanteCuartos}`)
        if (equiposCuartosFinalLocal.golesLocal < equiposCuartosFinalVisitante.golesVisitante) {
            equiposGanadoresCuartos.push(equiposCuartosFinalVisitante.equipovisitanteCuartos);

        } else {
            equiposGanadoresCuartos.push(equiposCuartosFinalLocal.equipolocalCuartos);

        }
    }
}


console.log("=========== Empiezan la semifinal ==============");



const arr2 = equiposGanadoresCuartos;
const equiposGanadoresCuartosObj = new Object();
Array.prototype.push.apply(equiposGanadoresCuartosObj, arr2);
//console.log(equiposGanadoresOctavosObj);    // { '0': 'a', '1': 'b', '2': 'c', length: 3 }
//console.log(equiposGanadoresOctavosObj[2]); // c


const style2 = {
    goles: 0
};
const equiposSemifinal = {
    ...equiposGanadoresCuartosObj,
    ...style2
};
//console.log(equiposCuartos.goles);


const equiposGanadoresSemifinal = [];
for (let i = 0; i < equiposSemifinal.length; i = i + 2) {

    const equipolocalCuartos = equiposSemifinal[i];
    const equipovisitanteCuartos = equiposSemifinal[i + 1];

    let golesVisitante = {
        golesVisitante: Math.floor(Math.random() * 6),

    };
    let golesLocal = {
        golesLocal: Math.floor(Math.random() * 6)
    }
    const equiposCuartosFinalVisitante = {
        equipovisitanteCuartos,
        ...golesVisitante
    };
    const equiposCuartosFinalLocal = {
        equipolocalCuartos,
        ...golesLocal
    };


    if (equiposCuartosFinalLocal.golesLocal > equiposCuartosFinalVisitante.golesVisitante) {
        console.log(`${equiposCuartosFinalLocal.equipolocalCuartos} ${equiposCuartosFinalLocal.golesLocal} - ${equiposCuartosFinalVisitante.golesVisitante} ${equiposCuartosFinalVisitante.equipovisitanteCuartos} => ${equiposCuartosFinalLocal.equipolocalCuartos}`)
        equiposGanadoresSemifinal.push(equiposCuartosFinalLocal.equipolocalCuartos);

    }
    else if (equiposCuartosFinalLocal.golesLocal < equiposCuartosFinalVisitante.golesVisitante) {
        console.log(`${equiposCuartosFinalLocal.equipolocalCuartos} ${equiposCuartosFinalLocal.golesLocal} - ${equiposCuartosFinalVisitante.golesVisitante} ${equiposCuartosFinalVisitante.equipovisitanteCuartos} => ${equiposCuartosFinalVisitante.equipovisitanteCuartos}`)
        equiposGanadoresSemifinal.push(equiposCuartosFinalVisitante.equipovisitanteCuartos);

    } else if (equiposCuartosFinalLocal.golesLocal == equiposCuartosFinalVisitante.golesVisitante) {
        do {
            equiposCuartosFinalVisitante.golesVisitante = Math.floor(Math.random() * 6);
            equiposCuartosFinalLocal.golesLocal = Math.floor(Math.random() * 6);

        }
        while (equiposCuartosFinalLocal.golesLocal == equiposCuartosFinalVisitante.golesVisitante)
        console.log(`${equiposCuartosFinalLocal.equipolocalCuartos} ${equiposCuartosFinalLocal.golesLocal} - ${equiposCuartosFinalVisitante.golesVisitante} ${equiposCuartosFinalVisitante.equipovisitanteCuartos} => ${equiposCuartosFinalVisitante.equipovisitanteCuartos}`)
        if (equiposCuartosFinalLocal.golesLocal < equiposCuartosFinalVisitante.golesVisitante) {
            equiposGanadoresSemifinal.push(equiposCuartosFinalVisitante.equipovisitanteCuartos);

        }
        else {
            equiposGanadoresSemifinal.push(equiposCuartosFinalLocal.equipolocalCuartos);

        }
    }
}


console.log("=========== Empiezan la Final ==============");



const arr3 = equiposGanadoresSemifinal;
const equiposGanadoresSemifinalObj = new Object();
Array.prototype.push.apply(equiposGanadoresSemifinalObj, arr3);
//console.log(equiposGanadoresOctavosObj);    // { '0': 'a', '1': 'b', '2': 'c', length: 3 }
//console.log(equiposGanadoresOctavosObj[2]); // c


const style3 = {
    goles: 0
};
const equiposFinal = {
    ...equiposGanadoresSemifinalObj,
    ...style3
};
//console.log(equiposCuartos.goles);


const equiposGanadoresFinal = [];
for (let i = 0; i < equiposFinal.length; i = i + 2) {

    const equipolocalCuartos = equiposFinal[i];
    const equipovisitanteCuartos = equiposFinal[i + 1];

    let golesVisitante = {
        golesVisitante: Math.floor(Math.random() * 6),

    };
    let golesLocal = {
        golesLocal: Math.floor(Math.random() * 6)
    }
    const equiposCuartosFinalVisitante = {
        equipovisitanteCuartos,
        ...golesVisitante
    };
    const equiposCuartosFinalLocal = {
        equipolocalCuartos,
        ...golesLocal
    };


    if (equiposCuartosFinalLocal.golesLocal > equiposCuartosFinalVisitante.golesVisitante) {
        console.log(`${equiposCuartosFinalLocal.equipolocalCuartos} ${equiposCuartosFinalLocal.golesLocal} - ${equiposCuartosFinalVisitante.golesVisitante} ${equiposCuartosFinalVisitante.equipovisitanteCuartos} => ${equiposCuartosFinalLocal.equipolocalCuartos}`)
        equiposGanadoresFinal.push(equiposCuartosFinalLocal.equipolocalCuartos);

    }
    else if (equiposCuartosFinalLocal.golesLocal < equiposCuartosFinalVisitante.golesVisitante) {
        console.log(`${equiposCuartosFinalLocal.equipolocalCuartos} ${equiposCuartosFinalLocal.golesLocal} - ${equiposCuartosFinalVisitante.golesVisitante} ${equiposCuartosFinalVisitante.equipovisitanteCuartos} => ${equiposCuartosFinalVisitante.equipovisitanteCuartos}`)
        equiposGanadoresFinal.push(equiposCuartosFinalVisitante.equipovisitanteCuartos);

    } else if (equiposCuartosFinalLocal.golesLocal == equiposCuartosFinalVisitante.golesVisitante) {
        do {
            equiposCuartosFinalVisitante.golesVisitante = Math.floor(Math.random() * 6);
            equiposCuartosFinalLocal.golesLocal = Math.floor(Math.random() * 6);

        }
        while (equiposCuartosFinalLocal.golesLocal == equiposCuartosFinalVisitante.golesVisitante)
        console.log(`${equiposCuartosFinalLocal.equipolocalCuartos} ${equiposCuartosFinalLocal.golesLocal} - ${equiposCuartosFinalVisitante.golesVisitante} ${equiposCuartosFinalVisitante.equipovisitanteCuartos} => ${equiposCuartosFinalVisitante.equipovisitanteCuartos}`)
        if (equiposCuartosFinalLocal.golesLocal < equiposCuartosFinalVisitante.golesVisitante) {
            equiposGanadoresFinal.push(equiposCuartosFinalVisitante.equipovisitanteCuartos);

        }
        else {
            equiposGanadoresFinal.push(equiposCuartosFinalLocal.equipolocalCuartos);

        }
    }
    console.log(` =========== ${equiposGanadoresFinal} campeona de la EURO !============== `);
}




