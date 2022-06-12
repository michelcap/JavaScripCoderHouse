/// Variables Globales
const ingresos = new Array();
const egresos = new Array();

/// recupera datos de Local Storage
const abrir = () => {
	const auxIngresos = JSON.parse(localStorage.getItem('ingresos_JSON'));
	const auxEgreso = JSON.parse(localStorage.getItem('egresos_JSON'));
	if (auxIngresos != null) {
		for (const obj of Object.values(auxIngresos))
			ingresos.push(new Ingreso(obj._descripcion, obj._valor));
	}
	if (auxEgreso != null) {
		for (const obj of Object.values(auxEgreso))
			egresos.push(new Egreso(obj._descripcion, obj._valor));
	}
};

/// almacena datos en Local Storage
const guardar = () => {
	let ingresos_string = JSON.stringify(ingresos);
	let egresos_string = JSON.stringify(egresos);
	localStorage.setItem('ingresos_JSON', ingresos_string);
	localStorage.setItem('egresos_JSON', egresos_string);
};

/// funcion ejecutada al cargar la pagina
const cargarApp = () => {
	abrir();
	cargarCabecero();
	cargarIngresos();
	cargarEgresos();
};
let cargarCuerpo = document.getElementById("cuerpo");
cargarCuerpo.addEventListener("onload", cargarApp);

/// funcion que suma el total de los ingresos recorriendo el arreglo ingresos
const totalIngresos = () => {
	let totalIngreso = 0;
	for (let ingreso of ingresos) {
		totalIngreso += ingreso.valor;
	}
	return totalIngreso;
};

/// funcion que suma el total de los ingresos recorriendo el arreglo egresos
const totalEgresos = () => {
	let totalEgreso = 0;
	for (let egreso of egresos) {
		totalEgreso += egreso.valor;
	}
	return totalEgreso;
};

/// carga el html en el id correspondiente completando la seccion corespondiente
const cargarCabecero = () => {
	let presupuesto = totalIngresos() - totalEgresos();
	let porcentajeEgreso = totalIngresos() != 0 ? totalEgresos() / totalIngresos() : 0;
	document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
	document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
	document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
	document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
};

/// da formato al valor para que adopte el estilo de moneda
const formatoMoneda = (valor) => {
	return valor.toLocaleString('es-UY', { style: 'currency', currency: 'UYU', minimumFractionDigits: 2 });
};

/// da formato al porcentaje que representa en egresos
const formatoPorcentaje = (valor) => {
	return valor.toLocaleString('es-UY', { style: 'percent', minimumFractionDigits: 2 });
};

/// llama uno por uno a los elementos de la lista de ingresos para cargarle el html
const cargarIngresos = () => {
	let ingresosHTML = '';
	for (let ingreso of ingresos) {
		ingresosHTML += crearIngresosHTML(ingreso);
	}
	document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

/// carga en una variable el html necesario para completar la seccion ingresos
const crearIngresosHTML = (ingreso) => {
	let ingresosHTML = `
	<div class="elemento limpiarEstilos">
		<div class="elemento_descripcion">${ingreso.descripcion}</div>
		<div class="derecha limpiarEstilos">
			<div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
			<div class="elemento_eliminar">
				<button class="elemento_eliminar--btn">
					<ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
				</button>
			</div>
		</div>
	</div>
	`;
	return ingresosHTML;
};

/// llama uno por uno a los elementos de la lista de egresos para cargarle el html
const cargarEgresos = () => {
	let egresosHTML = '';
	for (let egreso of egresos) {
		egresosHTML += crearEgresosHTML(egreso);
	}
	document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

/// carga en una variable el html necesario para completar la seccion egresos
const crearEgresosHTML = (egreso) => {
	let porcentajePorEgreso = egreso.valor / totalIngresos();
	let egresosHTML = `
	<div class="elemento limpiarEstilos">
		<div class="elemento_descripcion">${egreso.descripcion}</div>
		<div class="derecha limpiarEstilos">
			<div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
			<div class="elemento_porcentaje">${formatoPorcentaje(porcentajePorEgreso)}</div>
			<div class="elemento_eliminar">
				<button class="elemento_eliminar--btn">
					<ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
				</button>
			</div>
		</div>
	</div>
	`;
	return egresosHTML;
};

/// elimina el elemento que corresponda a ingreso clikeado
const eliminarIngreso = (id) => {
	let idEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
	ingresos.splice(idEliminar, 1);
	guardar();
	cargarCabecero();
	cargarIngresos();
	cargarEgresos();
};

/// elimina el elemento que corresponda a ingreso clikeado
const eliminarEgreso = (id) => {
	let idEliminar = egresos.findIndex((egreso) => egreso.id === id);
	egresos.splice(idEliminar, 1);
	guardar();
	cargarCabecero();
	cargarIngresos();
	cargarEgresos();
};

/// funcion que agrega elementos a los arreglos de egreso ingreso da vida al boton de check
const agregarElemento = () => {
	const form = document.forms['formulario'];
	const tipo = form['tipo'];
	const descripcion = form['descripcion'];
	const valor = form['valor'];
	if (descripcion.value !== '' && valor.value !== '' 
		&& !valor.value.includes("-") && !valor.value.includes("+")
		&& valor.value !== "0") {
		if (tipo.value == 'ingreso') {
			ingresos.push(new Ingreso(descripcion.value, parseFloat(valor.value)));
		}
		else if (tipo.value == 'egreso') {
			egresos.push(new Egreso(descripcion.value, parseFloat(valor.value)));
		}
		guardar();
	}
	else if (descripcion.value === '') {
		swal({
			title: "Error",
			text: "Campo descripción vacio",
			icon: "error",
			button: "Ok",
		});
	}
	else if (valor.value === '' || valor.value === "0") {
		swal({
			title: "Error",
			text: "Campo valor vacio o incorrecto",
			icon: "error",
			button: "Ok",
		});
	}
	else if (valor.value.includes("-") || valor.value.includes("+")) {
		swal({
			title: "Error",
			text: "Campo valor no admite signos",
			icon: "error",
			button: "Ok",
		});
	}

	cargarCabecero();
	cargarIngresos();
	cargarEgresos();
};
let checkBTN = document.getElementById("click_btn");
checkBTN.addEventListener("click", agregarElemento);

/// evita que se recargue la paguina por activar cargar el formulario
const noReload = (e) => {
	e.returnValue = false;
};
let checkReload = document.getElementById("formulario");
checkReload.addEventListener("submit", noReload, false);


