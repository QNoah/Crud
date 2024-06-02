import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HoofdpaginaComponent } from './paginas/hoofdpagina/hoofdpagina.component';
import { OverzichtComponent } from './paginas/overzicht/overzicht.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { UitgelogtComponent } from './paginas/uitgelogt/uitgelogt.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HoofdpaginaComponent},
  {path: 'Overzicht', component: OverzichtComponent},
  {path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'Login', component: LoginComponent},
  {path: 'Loguit-succes', component: UitgelogtComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
