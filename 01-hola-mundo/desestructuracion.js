const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombre: function () {
    return `${this.poder} ${this.nombre} ${this.apellido}`
  }
}

// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder = deadpool.poder

function imprimirHeroe({ nombre, apellido, poder, edad = 5 }) {
  // function imprimirHeroe(heroe) {
  // const { poder, nombre, apellido, edad = 0 } = heroe;
  console.log(nombre, apellido, poder, edad);
}

imprimirHeroe(deadpool);

const heroes = ['Aquaman', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);

