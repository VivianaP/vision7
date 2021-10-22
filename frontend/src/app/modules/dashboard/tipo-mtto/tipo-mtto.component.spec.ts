import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMttoComponent } from './tipo-mtto.component';

describe('TipoMttoComponent', () => {
  let component: TipoMttoComponent;
  let fixture: ComponentFixture<TipoMttoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMttoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMttoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
