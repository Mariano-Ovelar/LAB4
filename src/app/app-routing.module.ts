import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/clase01/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/clase01/error/error.component';
import { LoginComponent } from './components/clase01/login/login.component';
import { RegisterComponent } from './components/clase02/register/register.component';

const routes: Routes = [
  {
    path: 'Register',
    component: RegisterComponent,
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
    path: '',
    component: BienvenidoComponent,
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
