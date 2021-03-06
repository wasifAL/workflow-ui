import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {StageComponent} from './stage/stage.component';
import {StageactorComponent} from './stageactor/stageactor.component';
import {ApplicationComponent} from './application/application.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {UserComponent} from './user/user.component';
import {StageactionComponent} from './stageaction/stageaction.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'stage', component: StageComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'stage-actor', component: StageactorComponent, canActivate: [AuthGuard]},
  {path: 'application', component: ApplicationComponent, canActivate: [AuthGuard]},
  {path: 'stage-action', component: StageactionComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
