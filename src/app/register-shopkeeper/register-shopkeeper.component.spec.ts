import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterShopkeeperComponent } from './register-shopkeeper.component';

describe('RegisterShopkeeperComponent', () => {
  let component: RegisterShopkeeperComponent;
  let fixture: ComponentFixture<RegisterShopkeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterShopkeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterShopkeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
