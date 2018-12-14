import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//============start ts import================
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//=============== end ts import==============
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { AboutUsComponent } from './about-us/about-us.component';
import { GovernmentServicesComponent } from './government-services/government-services.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes=[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
{path:'register-form',component:RegisterFormComponent},
{path:'about-us',component:AboutUsComponent},
{path:'government-services',component:GovernmentServicesComponent},
{path:'home',component:LoginComponent},
{path:'login',component:LoginComponent},

]
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule,
    RouterModule.forRoot(routes),
    // ============start ts============
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    // =========== end ts ============
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    AboutUsComponent,
    GovernmentServicesComponent,
    FooterComponent,
    LoginComponent
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LcGq4AUAAAAAFGETWgfjh4rV7yc6iosDMNV5SaL',
    } as RecaptchaSettings,
    },
    {provide: RECAPTCHA_LANGUAGE,
      useValue: 'En', // use French language
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }