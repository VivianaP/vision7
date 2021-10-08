import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  cedula: string;
  phone: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cedula: '109846547', name: 'Rodrigo Hernan', phone: '3225644534', address: 'Av 3 #5-34'},
  {cedula: '109566547', name: 'Rafel Alvarez', phone: '3225644534', address: 'Calle 4 #2-12'},
  {cedula: '109246547', name: 'Carlos Acosta', phone: '3225644534', address: 'Calle 7 #4-45'},
  {cedula: '109846457', name: 'Ruben Vargas', phone: '3225644534', address: 'Av 4 #3-34'},
];

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'servicio', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
