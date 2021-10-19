import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { QrCodeModule } from 'ng-qrcode';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { WebcamModule } from 'ngx-webcam';

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
    QrCodeModule,
    NgQrScannerModule,
    WebcamModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
