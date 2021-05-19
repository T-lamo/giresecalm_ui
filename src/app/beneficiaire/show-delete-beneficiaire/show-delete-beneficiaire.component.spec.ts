import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteBeneficiaireComponent } from './show-delete-beneficiaire.component';

describe('ShowDeleteBeneficiaireComponent', () => {
  let component: ShowDeleteBeneficiaireComponent;
  let fixture: ComponentFixture<ShowDeleteBeneficiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteBeneficiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
