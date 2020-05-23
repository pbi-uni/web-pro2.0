import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderProductDetailsComponent } from './user-order-product-details.component';

describe('UserOrderProductDetailsComponent', () => {
  let component: UserOrderProductDetailsComponent;
  let fixture: ComponentFixture<UserOrderProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrderProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
