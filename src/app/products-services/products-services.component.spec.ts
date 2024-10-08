import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsServicesComponent } from './products-services.component';

describe('ProductsServicesComponent', () => {
  let component: ProductsServicesComponent;
  let fixture: ComponentFixture<ProductsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
