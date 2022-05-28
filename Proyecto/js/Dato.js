/// se crea la clase Dato que sera la padre de los hijos egreso ingreso
class Dato {
	constructor(descripcion, valor) {
		this._descripcion = descripcion;
		this._valor = valor;
	}
    get valor() { 
        return this._valor; 
    }  
    set valor(valor) { 
        this._valor = valor;
    }
    get descripcion() {
		return this._descripcion;
	}
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
}
