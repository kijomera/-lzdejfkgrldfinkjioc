const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); // Se necesita # al inicio
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { // función async
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`; // comillas por acentos
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (error) {
    handleError(error);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // falta $n. 
}

displayUser('stolinski').catch(handleError);
