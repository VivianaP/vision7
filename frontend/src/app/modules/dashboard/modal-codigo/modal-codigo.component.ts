import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-codigo',
  templateUrl: './modal-codigo.component.html',
  styleUrls: ['./modal-codigo.component.scss']
})
export class ModalCodigoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCodeResult(event: any) {
    console.log('Codigo escaneado', event);
    alert(event);
  }


}
