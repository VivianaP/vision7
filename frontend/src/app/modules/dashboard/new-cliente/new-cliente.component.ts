import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';


@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.scss']
})
export class NewClienteComponent implements OnInit {
  
  cliente: any = {};

  constructor(public factory: FactoryService, private router: Router) { }

  

  ngOnInit(): void {
  }

  newCliente(){
    if(!this.cliente.cedula || !this.cliente.nombre || !this.cliente.email
      || !this.cliente.telefono ||  !this.cliente.direccion){
      return alert("Llenar datos vacios");
    }
    console.log(this.cliente);

    this.factory.post('cliente', this.cliente).subscribe(
      (response: any) => {
        console.log('Cliente creado',response);

        this.cliente = {};
        this.router.navigate(['auth/login']);
      },
      (error: any) => {
        console.log(error);

      }
    );
  }
  

}
