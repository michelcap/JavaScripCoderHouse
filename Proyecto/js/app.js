/// arreglos que contendran los ingreses egresos que se carguen o eliminen
const ingresos = [new Ingreso('Salario', 3000), new Ingreso('Auto', 6000)];
const egresos = [new Egreso('Alquiler', 3000), new Egreso('Gym', 500)];

/// funcion ejecutada al cargar la pagina
let cargarApp = () => {
	cargarCabecero();
	cargarIngresos();
	cargarEgresos();
};

/// funcion que suma el total de los ingresos recorriendo el arreglo ingresos
let totalIngresos = () => {
	let totalIngreso = 0;
	for (let ingreso of ingresos) {
		totalIngreso += ingreso.valor;
	}
	return totalIngreso;
};

/// funcion que suma el total de los ingresos recorriendo el arreglo egresos
let totalEgresos = () => {
	let totalEgreso = 0;
	for (let egreso of egresos) {
		totalEgreso += egreso.valor;
	}
	return totalEgreso;
};

/// da formato al valor para que adopte el estilo de moneda
const formatoMoneda = (valor) => {
	return valor.toLocaleString('es-UY', {style: 'currency', currency: 'UYU', minimumFractionDigits: 2});
};

/// da formato al porcentaje que representa en egresos
const formatoPorcentaje = (valor) => {
	return valor.toLocaleString('es-UY', {style: 'percent', minimumFractionDigits: 2});
};

/// llama uno por uno a los elementos de la lista de ingresos para cargarle el html
const cargarIngresos = () => {
	let ingresosHTML = '';
	for (let ingreso of ingresos) {
		ingresosHTML += crearIngresosHTML(ingreso);
	}
	document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};


/// llama uno por uno a los elementos de la lista de egresos para cargarle el html
const cargarEgresos = () => {
	let egresosHTML = '';
	for (let egreso of egresos) {
		egresosHTML += crearEgresosHTML(egreso);
	}
	document.getElementById('lista-egresos').innerHTML = egresosHTML;
};



/// funcion que agrega elementos a los arreglos de egreso ingreso da vida al boton de check
const agregarElemento = () => {
	const form = document.forms['formulario'];
	const tipo = form['tipo'];
	const descripcion = form['descripcion'];
	const valor = form['valor'];
	if (descripcion.value !== '' && valor.value !== '') {
		if (tipo.value == 'ingreso') {
			ingresos.push(new Ingreso(descripcion.value, parseFloat(valor.value)));
		}
		else if (tipo.value == 'egreso') {
			egresos.push(new Egreso(descripcion.value, parseFloat(valor.value)));
		}
	}
	cargarCabecero();
	cargarIngresos();
	cargarEgresos();
};


