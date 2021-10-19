import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
<<<<<<< HEAD
import { QrCodeModule } from 'ng-qrcode';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { WebcamModule } from 'ngx-webcam';
=======

>>>>>>> 7f303339e8629f65bdc024e2d647877ac7fb133f

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
<<<<<<< HEAD
    QrCodeModule,
    NgQrScannerModule,
    WebcamModule
=======
>>>>>>> 7f303339e8629f65bdc024e2d647877ac7fb133f
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
