import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCamaraComponent } from './modal-camara.component';

describe('ModalCamaraComponent', () => {
  let component: ModalCamaraComponent;
  let fixture: ComponentFixture<ModalCamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCamaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
