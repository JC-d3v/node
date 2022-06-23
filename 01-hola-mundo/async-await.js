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

const id = 1;

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalarioByID(id);

    return `el salario del empleado ${empleado} es de ${salario} `;
  } catch (error) {
    throw error;
  }

}

getInfoUsuario(id)
  .then(msg => {
    console.log(`Todo bien`);
    console.log(msg)
  })
  .catch(err => {
    console.log(`Todo mal`);
    console.log(err)
  })