const empleados = [
  {
    id: 1,
    nombre: 'Fernando'
  },
  {
    id: 2,
    nombre: 'Alonzo'
  },
  {
    id: 3,
    nombre: 'primero'
  }
]

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
];


const getEmpleado = (id) => {

  return promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    (empleado)
      ? resolve(empleado)
      : reject(`No existe empleado con id ${id}`)

  });
}

const getSalarioByID = (id) => {
  return promesa = new Promise((resolve, reject) => {
    const salario = salarios.find(e => e.id === id)?.salario;

    (salario)
      ? resolve(salario)
      : reject(`No existe un salario para el Id ${id}`)

  })
}

const id = 4;

// Promesas ///

// getEmpleado(id)
//   .then(empleado => console.log(empleado))
//   .catch(err => console.log(err));

// getSalarioByID(id)
//   .then(salario => console.log(salario))
//   .catch(err => console.log(err))



// getEmpleado(id)
//   .then(empleado => {
//     getSalarioByID(id)
//       .then(salario => {
//         console.log(`el empleado ${empleado} tienen un salario de ${salario}`);
//       })
//       .catch(err => console.log(err))
//   })
//   .catch(err => console.log(err))

// Promesas en cadena  ///

let nombre;

getEmpleado(id)
  .then(empleado => {
    nombre = empleado;
    return getSalarioByID(id)
  })
  .then(salario => console.log(`el empleado con el nombre ${nombre} tiene un salario de de ${salario} `))
  .catch(err => console.log(err))

