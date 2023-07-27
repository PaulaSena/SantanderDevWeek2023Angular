import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselItensComponent } from './carrossel-itens.component';

describe('CarrosselItensComponent', () => {
  let component: CarrosselItensComponent;
  let fixture: ComponentFixture<CarrosselItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosselItensComponent]
    });
    fixture = TestBed.createComponent(CarrosselItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
