export class Usuario {
  private _nombre: string = '';
  private _clave: string = '';

  constructor(nombre: string, clave: string) {
    this.nombre = nombre;
    this.clave = clave;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(newNombre: string) {
    newNombre = newNombre.trim();

    if (newNombre === '') {
      throw 'El nombre no puede estar vacío.';
    }
    this._nombre = newNombre;
  }

  get clave() {
    return this._clave;
  }
  set clave(newClave: string) {
    newClave = newClave.trim();

    if (newClave === '') {
      throw 'La clave no puede estar vacía.';
    }
    this._clave = newClave;
  }
}
