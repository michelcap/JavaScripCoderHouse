let urll = "";
/// funcion que interactua con API para convertir la moneda
const convertirMoneda = () => {
	const form = document.forms['formulario_API'];
	const from = form['from'];
	const to = form['to'];
	const valor_from = form['valor_from'];

	if (from.value !== '' && to.value !== '' && valor_from.value > 0 && !valor_from.value.includes("-")) {

		async function newsSearch(from, to, value) {
			let url = `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${value}&api_key=215841912e-f429b5a8a1-rdnmee`;
			const resp = await fetch(url);
			const info = await resp.json();
			return info;
		}

		let info = newsSearch(from.value, to.value, valor_from.value);
		info
			.then(response => {
				let retorno = Object.values(response.result);		
				document.getElementById('valor_to').innerHTML = retorno[0];
			})
			.catch(error => {
				swal({
					title: "Error",
					text: "Lo ingresado en el campo moneda no corresponde a un formato valido. Ejemplo: Dolares Americanos es USD. Puede consultar la siguiente referencia https://es.iban.com/currency-codes",
					icon: "error",
					button: "Corregir",
				});
			});
	}
	else if (valor_from.value === '' || valor_from.value === "0") {
		swal({
			title: "Error",
			text: "Campo valor vacio o incorrecto",
			icon: "error",
			button: "Corregir",
		});
	}
	else if (valor_from.value.includes("-")) {
		swal({
			title: "Error",
			text: "Campo valor no admite signos",
			icon: "error",
			button: "Corregir",
		});
	}


};
let checkBTN_api = document.getElementById("click_btn_api");
checkBTN_api.addEventListener("click", convertirMoneda);

/// evita que se recargue la paguina por activar cargar el formulario
const noReloadAPI = (e) => {
	e.returnValue = false;
};
let checkReloadAPI = document.getElementById("formulario_API");
checkReloadAPI.addEventListener("submit", noReload, false);