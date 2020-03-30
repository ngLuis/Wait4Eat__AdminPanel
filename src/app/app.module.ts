import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CookieService } from 'ngx-cookie-service'; 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './login/carousel/carousel.component';
import { ImagesService } from './shared/services/images.service';
import { AuthService } from './shared/services/auth.service';
import { ToastService } from './shared/services/toast.service';
import { MenuModule } from './shared/components/menu/menu.module';
import { FormModule } from './shared/components/form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    MenuModule,
    FormModule,
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
