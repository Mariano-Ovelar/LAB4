import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent {
  public name: string = 'Angular';
  public btnLabel: string = 'Click me';
  public apellido: string = 'Ovelar';

  public onClick(event?: any): void {
    console.log(event);
    this.name = Math.random()?.toString();
  }
}
