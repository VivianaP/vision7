import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';


interface TipoMtto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tipo-mtto',
  templateUrl: './tipo-mtto.component.html',
  styleUrls: ['./tipo-mtto.component.scss']
})
export class TipoMttoComponent implements OnInit {

  tiposMantenimientos: any = [];
  tipoMantenimiento: any = {};

  constructor(public factory: FactoryService, private router: Router) { }

  ngOnInit(): void {
    this.cargarTipos();

  }

  cargarTipos(){
    this.factory.get('tipoMantenimiento?padre=6172d40224252645c0a9dca3').subscribe(
      (response: any) => {
        this.tiposMantenimientos = response;
        this.tiposMantenimientos.forEach((tipo:any) => {
          this.cargarSubtipo(tipo);
        });
        console.log('tipos', this.tiposMantenimientos);
      },
      (error: any) => {
        console.log(error);
      }

    );
  }

  cargarSubtipo(elemento: any){
    this.factory.get('tipoMantenimiento?padre=' + elemento.id).subscribe(
      (response: any) => {
        console.log('Subtipos',response);
        elemento.subTipo = response;
        console.log('Subtipos', elemento);
      },
      (error: any) => {
        console.log(error);
      }

    );
  }

  changeTipoPrin(evt: any): void {
    console.log('change', evt);
  }

  newTipo(){
    if(!this.tipoMantenimiento.nombre){
      return alert("Llenar datos vacios");
    }
    if(this.tipoMantenimiento.tipoSelect === 'tipo') {
      this.tipoMantenimiento.padre = this.tiposMantenimientos[this.tipoMantenimiento.index].id;
    }

    console.log(this.tipoMantenimiento);

    this.factory.post('tipoMantenimiento', this.tipoMantenimiento).subscribe(
      (response: any) => {
        console.log('Tipo creado',response);

        this.tipoMantenimiento = {};
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
