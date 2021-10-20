import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuario: any = {};
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



  constructor(public factory: FactoryService, private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFormControl.hasError('email') ? 'Email no valido' : '';
  }

  registrar(){
    if(!this.usuario.cedula || !this.usuario.nombre || !this.usuario.email || !this.usuario.password
      || !this.usuario.telefono ||  !this.usuario.direccion){
      return alert("Llenar datos vacios");
    }
    console.log(this.usuario);

    this.factory.post('usuario/registrar', this.usuario).subscribe(
      (response: any) => {
        console.log('Usuario creado',response);

        this.usuario = {};
        this.router.navigate(['auth/login']);
      },
      (error: any) => {
        console.log(error);

      }
    );
  }


}
