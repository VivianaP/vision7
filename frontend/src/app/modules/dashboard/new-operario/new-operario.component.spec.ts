import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOperarioComponent } from './new-operario.component';

describe('NewOperarioComponent', () => {
  let component: NewOperarioComponent;
  let fixture: ComponentFixture<NewOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
