import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListingsPageComponent } from './components/listings-page/listings-page.component';
import { MatCardModule } from '@angular/material/card';
import { BidPageComponent } from './components/bid-page/bid-page.component';
import { CountdownModule } from 'ngx-countdown';
import { GALLERY_CONFIG, GalleryConfig, GalleryModule } from 'ng-gallery';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ListingsPageComponent,
    BidPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CountdownModule,
    GalleryModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
