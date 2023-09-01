import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/clase01/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/clase01/error/error.component';
import { LoginComponent } from './components/clase01/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoComponent,
  },
  {
    path: 'Bienvenido',
    component: BienvenidoComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: '404',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
