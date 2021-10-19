import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { AfterContentInit } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import {Observable, Subject} from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { ModalCamaraComponent } from '../modal-camara/modal-camara.component';
import { MatDialog } from '@angular/material/dialog';


interface Mtto {
  value: string;
  viewValue: string;
}

interface Sitio {
  value: string;
  viewValue: string;
}

interface Silla {
  value: string;
  viewValue: string;
}

interface Material {
  value: string;
  viewValue: string;
}

interface Color {
  value: string;
  viewValue: string;
}

interface Pago {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-new-servicio',
  templateUrl: './new-servicio.component.html',
  styleUrls: ['./new-servicio.component.scss']
})


export class NewServicioComponent implements OnInit {


  panelOpenState = false;
  
  public webcamImage: any = null;
  
  signaturePad: any;
  @ViewChild('canvas') canvasEl: any;
  signatureImg: any;

  @ViewChild(QrScannerComponent, ) qrScannerComponent: any;

  mttos: Mtto[] = [
    {value: 'preventivo-0', viewValue: 'Preventivo'},
    {value: 'correctivo-1', viewValue: 'Correctivo'},
  ];

  sitios: Sitio[] = [
    {value: 'sitio-0', viewValue: 'En sitio'},
    {value: 'domicilio-1', viewValue: 'A domicilio'},
  ];

  sillas: Silla[] = [
    {value: 'secretarial-0', viewValue: 'Secretarial'},
    {value: 'ejecutiva-1', viewValue: 'Ejecutiva'},
    {value: 'gamer-2', viewValue: 'Gamer'},
    {value: 'normal-3', viewValue: 'Normal'},
  ];

  materiales: Material[] = [
    {value: 'paño-0', viewValue: 'Paño'},
    {value: 'tela-1', viewValue: 'Tela'},
    {value: 'malla-2', viewValue: 'Malla'},
    {value: 'sintetico-3', viewValue: 'Material sintético'},
  ];

  colores: Color[] = [
    {value: 'uno-0', viewValue: 'Un color'},
    {value: 'dos-1', viewValue: 'Dos colores'},
  ];

  pagos: Pago[] = [
    {value: 'efectivo-0', viewValue: 'Efectivo'},
    {value: 'transferencia-1', viewValue: 'Transferencia'},
    {value: 'wompi-0', viewValue: 'Wompi'},
  ];

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }


  public modo: any = "false";

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ModalCamaraComponent, {
      
    });
  }

  ngOnInit(): void {

}
  

  ngAfterViewInit() {
      this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
      
  }

  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }


}
