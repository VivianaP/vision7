import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-modal-camara',
  templateUrl: './modal-camara.component.html',
  styleUrls: ['./modal-camara.component.scss']
})
export class ModalCamaraComponent implements OnInit {

  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: any = null;
  seconds: any;

  public triggerSnapshot(): void {
    this.seconds = 3;
    this.trigger.next();
    this.seconds = null;
  }
  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  
  constructor() {}

 
  ngOnInit(): void {
  }

  
}

