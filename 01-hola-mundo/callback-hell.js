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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find(e => e.id === id)?.nombre;
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`empleado con el ID ${id} no existe`);
  }

}

const getSalario = (id, callback) => {
  const salario = salarios.find(e => e.id === id)?.salario;
  if (salario) {
    callback(null, salario);
  } else {
    callback(`El salario con el ID ${id} no existe`)
  }
}

const id = 3;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log(`Error`);
    return console.log(err);
  }

  getSalario(id, (err, salario) => {
    if (err) {
      return console.log(err);
    }
    console.log(`el empleado ${empleado} tiene un salario de ${salario}`);
  })

});
