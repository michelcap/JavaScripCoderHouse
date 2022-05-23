/* JavaScript is a programming language that is used to create interactive effects within a web browser. */
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
