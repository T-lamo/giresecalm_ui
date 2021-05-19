import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBeneficiaireComponent } from './add-edit-beneficiaire.component';

describe('AddEditBeneficiaireComponent', () => {
  let component: AddEditBeneficiaireComponent;
  let fixture: ComponentFixture<AddEditBeneficiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBeneficiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
