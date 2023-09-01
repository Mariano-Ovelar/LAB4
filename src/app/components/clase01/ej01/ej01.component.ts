import { Component } from '@angular/core';

@Component({
  selector: 'app-ej01',
  templateUrl: './ej01.component.html',
  styleUrls: ['./ej01.component.scss'],
})
export class Ej01Component {
  public btnLabelCalular: string = 'Calular';
  public btnLabelLimpiar: string = 'Limpiar';

  public textLabelEdad1: string = 'Edad1';
  public textLabelEdad2: string = 'Edad2';

  public numEdad1: number = 0;
  public numEdad2: number = 0;
  public numSuma: number = 0;
  public numPromedio: number = 0;

  public calular(): void {
    this.numSuma = this.numEdad1 + this.numEdad2;
    this.numPromedio = this.numSuma / 2;
  }
  public limpiar(): void {
    this.numEdad1 = 0;
    this.numEdad2 = 0;
    this.calular();
  }
}
