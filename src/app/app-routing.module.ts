import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicialComponent} from './inicial/inicial.component';
import { CuentaComponent } from "./cuenta/cuenta.component";
import { PerfilComponent} from "./perfil/perfil.component";
import { ChartComponent} from "./chart/chart.component";
import { DonaComponent} from "./dona/dona.component";
import { PieComponent} from "./pie/pie.component";


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'bienvenido', component:InicialComponent},
  {path: 'cuentas', component:CuentaComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'grafica', component:ChartComponent},
  {path: 'dona', component:DonaComponent},
  {path: 'pie', component:PieComponent},
  {path: '**', component:InicialComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
