import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// angular components
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// project components
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';

// project modules
import {AuthModule} from './auth/auth.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TokenInterceptor} from './token-interceptor';
import {StageactorComponent} from './stageactor/stageactor.component';
import {StageComponent} from './stage/stage.component';
import {ApplicationComponent} from './application/application.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserComponent} from './user/user.component';
import { StageactionComponent } from './stageaction/stageaction.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StageComponent,
    StageactorComponent,
    ApplicationComponent,
    SidebarComponent,
    UserComponent,
    StageactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
