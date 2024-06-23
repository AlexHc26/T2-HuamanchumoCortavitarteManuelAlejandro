import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pregunta2Component } from './dashboard/pregunta2/pregunta2.component';
import { Pregunta3Component } from './dashboard/pregunta3/pregunta3.component';
import { Pregunta4Component } from './dashboard/pregunta4/pregunta4.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: 'pregunta2', component: Pregunta2Component },
      { path: 'pregunta3', component: Pregunta3Component },
      { path: 'pregunta4', component: Pregunta4Component }
    ] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
