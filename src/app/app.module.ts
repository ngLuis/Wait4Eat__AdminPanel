import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CookieService } from 'ngx-cookie-service'; 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './login/carousel/carousel.component';
import { ImagesService } from './shared/services/images.service';
import { FormComponent } from './shared/components/form/form.component';
import { AuthService } from './shared/services/auth.service';
import { ToastService } from './shared/services/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    ImagesService,
    AuthService,
    CookieService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
