import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeliveryBoyComponent } from './register-delivery-boy.component';

describe('RegisterDeliveryBoyComponent', () => {
  let component: RegisterDeliveryBoyComponent;
  let fixture: ComponentFixture<RegisterDeliveryBoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDeliveryBoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDeliveryBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
