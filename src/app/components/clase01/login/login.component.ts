import { Component } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public textLabelNombre: string = 'Nombre';
  public textLabelClave: string = 'Clave';

  public btnLabelEnviar: string = 'Enviar';

  private persona?: Usuario;
  public nombre: string = '';
  public clave: string = '';

  public Enviar(): void {
    try {
      this.persona = new Usuario(this.nombre, this.clave);
      console.log(`Bienvenido ${this.persona.nombre}.`);
      alert(`Bienvenido ${this.persona.nombre}.`);
    } catch (error) {
      alert(error);
      console.log(`Error: ${error}`);
    }
  }
}
