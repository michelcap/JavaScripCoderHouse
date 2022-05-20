/// arreglos que contendran los ingreses egresos que se carguen o eliminen
const ingresos = [new Ingreso('Salario', 3000), new Ingreso('Auto', 6000)];
const egresos = [new Egreso('Alquiler', 3000), new Egreso('Gym', 500)];


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


