import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// angular components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// project components
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

// project modules
import { AuthModule } from './auth/auth.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TokenInterceptor } from './token-interceptor';
import { StageactorComponent } from './stageactor/stageactor.component';
import { StageComponent } from './stage/stage.component';
import { ApplicationComponent } from './application/application.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

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
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
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
export class AppModule { }
