import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicialComponent } from './inicial/inicial.component';
import { ChartsModule } from 'ng2-charts';
import { CuentaComponent } from './cuenta/cuenta.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ChartComponent } from './chart/chart.component';
import { DonaComponent } from './dona/dona.component';
import { PieComponent } from './pie/pie.component';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';


@NgModule({
  declarations: [
    AppComponent,
    IngresarComponent,
    RegistrarseComponent,
    InicioComponent,
    InicialComponent,
    CuentaComponent,
    PerfilComponent,
    ChartComponent,
    DonaComponent,
    PieComponent,
    TipoCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
