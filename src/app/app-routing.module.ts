import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {StageComponent} from './stage/stage.component';
import {StageactorComponent} from './stageactor/stageactor.component';
import {ApplicationComponent} from './application/application.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'stage', component: StageComponent},
  {path: 'stageactor', component: StageactorComponent},
  {path: 'application', component: ApplicationComponent}
  // {path: 'User', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
