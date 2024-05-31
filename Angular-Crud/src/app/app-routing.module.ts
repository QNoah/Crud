import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { HoofdpaginaComponent } from './paginas/hoofdpagina/hoofdpagina.component';
import { OverzichtComponent } from './paginas/overzicht/overzicht.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {path: '', component: HoofdpaginaComponent},
  {path: 'overzicht', component: OverzichtComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
