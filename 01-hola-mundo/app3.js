console.log(`Inicio de programa`); //out 1

setTimeout(() => {
  console.log(`primer timeOut`); //out 5
}, 3000);

setTimeout(() => {
  console.log(`segundo timeOut`); //out 3
}, 0);

setTimeout(() => {
  console.log(`tercer timeOut`);  //out 4
}, 0);

console.log(`Fin de programa`); //out 2

const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(html);