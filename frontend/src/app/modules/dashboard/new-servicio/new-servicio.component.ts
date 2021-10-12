import { Component, OnInit } from '@angular/core';

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

  public modo: any = "false";

  constructor() { }

  ngOnInit(): void {
  }

}
