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
import { IngresosComponent } from './ingresos/ingresos.component';
import { GastosComponent } from './gastos/gastos.component';


@NgModule({
  declarations: [
    AppComponent,
    IngresarComponent,
    RegistrarseComponent,
    InicioComponent,
    InicialComponent,
    IngresosComponent,
    GastosComponent
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
