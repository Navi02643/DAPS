import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DadoComponent } from './dado/dado.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';


@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    SelectornumericoComponent,
    CronometroComponent,
    ListadoarticulosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
