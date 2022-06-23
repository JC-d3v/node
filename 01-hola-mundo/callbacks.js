
// setTimeout(() => {
//   console.log(`hola mund`);
// }, 3000);

const getUsuarioByID = (id, callback) => {

  const user = {
    id,
    nombre: 'Fernado'
  }

  setTimeout(() => {
    callback(user);
  }, 3500)

}

getUsuarioByID(10, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
});
