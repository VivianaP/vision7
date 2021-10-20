import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: any = {};
  hide = true;

  constructor(public factory: FactoryService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.factory.post('usuario/login', this.usuario).subscribe(
      (response: any) => {
        console.log('login correcto',response);
        this.usuario = {};
        localStorage.setItem('usuario', JSON.stringify(response.data));
        this.factory.loadUser();
        this.router.navigate(['']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
