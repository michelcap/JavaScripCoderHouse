let totalIngresos = () => {
	let totalIngreso = 0;
	for (let ingreso of ingresos) {
		totalIngreso += ingreso.valor;
	}
	return totalIngreso;
};

let totalEgresos = () => {
	let totalEgreso = 0;
	for (let egreso of egresos) {
		totalEgreso += egreso.valor;
	}
	return totalEgreso;
};

const formatoMoneda = (valor) => {
	return valor.toLocaleString('es-UY', {style: 'currency', currency: 'UYU', minimumFractionDigits: 2});
};

const formatoPorcentaje = (valor) => {
	return valor.toLocaleString('es-UY', {style: 'percent', minimumFractionDigits: 2});
};

