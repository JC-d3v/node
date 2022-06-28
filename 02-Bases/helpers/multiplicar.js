const fs = require('fs');

const crearArchivo = async (base = 4) => {
  try {
    console.log(`========================`);
    console.log(`tabla de multiplicar ${base}`);
    console.log(`========================`);

    let salida = '';

    for (let i = 1; i <= 10; i++) {
      salida += (`${base} x ${i} = ${base * i}\n`);
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida)

    return `tabla-${base}.txt`;

  } catch (err) {
    throw err
  }

}


module.exports = {
  crearArchivoX: crearArchivo
}