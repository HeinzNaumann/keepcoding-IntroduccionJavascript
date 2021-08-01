// const fighters = ["Bud spencer", "Chuck Norris", "Van damme"];

// for (let i = 0; i < fighters.length; i++) {
//   const fighter = fighters[i];
//   console.log(fighter);
// }

// // for (let i in fighters) {
// //   const fighter = fighters[i];
// //   console.log(fighter);
// // }

// // for (let fighter of fighters) {
// //   console.log(fighter);
// // }

// const pajaro = (nombre) => {
//   return "hola" + nombre;
// };

// console.log(pajaro("nombre"));

function serHobbit() {
  //caminar
  caminar();
  // comer
  comer("7AM", desayuno); //coje la funcion de comer y le pasamos los atributos
  caminar();
  caminar();
  comer("12Am", Almuerzo);
}

function comer(hora, funcioncomida) {
  //la funcion comida hace referencia a la que le pasamos anteriormente en la funcion serHobbit. hace la funcion de call back y en el segundo parametro coge
  //la funcion de mas abajo.
  funcioncomida(hora); //=> desayuno('7AM')
}

function desayuno(hora) {
  console.log("Antes hacer deporte");
  console.log(`${hora}: Toca desayunar`);
}

const Almuerzo = (hora) => {
  console.log("antes de almorzar lavate las manos");
  console.log(`${hora}: Toca almorzar`);
};

const caminar = () => {
  console.log("camina");
};

serHobbit();
