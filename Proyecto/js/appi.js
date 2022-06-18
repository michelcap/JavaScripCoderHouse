let urll = "";
/// funcion que interactua con API para convertir la moneda
const convertirMoneda = () => {
	const form = document.forms['formulario_API'];
	const from = form['from'];
	const to = form['to'];
    const valor_from = form['valor_from'];
	if (from.value !== '' && to.value !== '') {
		urll = `https://api.fastforex.io/convert?from=${from.value}&to=${to.value}&amount=${valor_from.value}&api_key=215841912e-f429b5a8a1-rdnmee`
	}
    console.log(urll)
};
let checkBTN_api = document.getElementById("click_btn_api");
checkBTN_api.addEventListener("click", convertirMoneda );
/*"https://api.fastforex.io/convert?from=EUR&to=UYU&amount=50&api_key=215841912e-f429b5a8a1-rdnmee"*/
// const options = {method: 'GET', headers: {Accept: 'application/json'}};

// fetch(urll, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

/// evita que se recargue la paguina por activar cargar el formulario
const noReloadAPI = (e) => {
	e.returnValue = false;
};
let checkReloadAPI = document.getElementById("formulario_API");
checkReloadAPI.addEventListener("submit", noReload, false);