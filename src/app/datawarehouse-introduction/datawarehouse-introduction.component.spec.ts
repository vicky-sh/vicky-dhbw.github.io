import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatawarehouseIntroductionComponent } from './datawarehouse-introduction.component';

describe('DatawarehouseIntroductionComponent', () => {
  let component: DatawarehouseIntroductionComponent;
  let fixture: ComponentFixture<DatawarehouseIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatawarehouseIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatawarehouseIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
