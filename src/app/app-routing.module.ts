import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicialComponent} from './inicial/inicial.component';
import { IngresosComponent} from './ingresos/ingresos.component';
import { GastosComponent} from './gastos/gastos.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'bienvenido', component:InicialComponent},
  {path: 'ingresos', component:IngresosComponent},
  {path: 'gastos', component:GastosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
