/// clase hija de la clase Dato que suma el identificador unico id
class Ingreso extends Dato {
	static contadorIngresos = 0;
	constructor(descripcion, valor) {
		super(descripcion, valor);
		this._id = ++Ingreso.contadorIngresos;
	}
	get id() {
		return this._id;
	}
}
