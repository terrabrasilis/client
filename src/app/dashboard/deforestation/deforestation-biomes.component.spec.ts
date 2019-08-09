import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeforestationBiomesComponent } from './deforestation-biomes.component';

describe('DeforestationBiomesComponent', () => {
  let component: DeforestationBiomesComponent;
  let fixture: ComponentFixture<DeforestationBiomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeforestationBiomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeforestationBiomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
