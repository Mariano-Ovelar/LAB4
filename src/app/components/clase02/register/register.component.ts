import { Component } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public textLabelNombre: string = 'Nombre';
  public textLabelClave: string = 'Clave';

  public btnLabelEnviar: string = 'Registrarte';

  private persona?: Usuario;
  public nombre: string = '';
  public clave: string = '';

  public Registrar(): void {
    try {
      this.persona = new Usuario(this.nombre, this.clave);
      localStorage.setItem('Usuario', JSON.stringify(this.persona));
      console.log(`Se a registrado: ${this.persona.nombre}.`);
      alert(`Se a registrado: ${this.persona.nombre}.`);
    } catch (error) {
      alert(error);
      console.log(`Error: ${error}`);
    }
  }
}
