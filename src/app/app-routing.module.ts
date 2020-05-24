import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicialComponent} from './inicial/inicial.component';
import { CuentaComponent } from "./cuenta/cuenta.component";
import { PerfilComponent} from "./perfil/perfil.component";



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'bienvenido', component:InicialComponent},
  {path: 'cuentas', component:CuentaComponent},
  {path: 'perfil', component:PerfilComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
