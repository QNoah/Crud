import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { HoofdpaginaComponent } from './paginas/hoofdpagina/hoofdpagina.component';
import { NavComponent } from './herbruikbare-components/nav/nav.component';
import { OverzichtComponent } from './paginas/overzicht/overzicht.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { UitgelogtComponent } from './paginas/uitgelogt/uitgelogt.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HoofdpaginaComponent,
    NavComponent,
    OverzichtComponent,
    UitgelogtComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
