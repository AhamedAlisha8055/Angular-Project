import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudfmComponent } from './crudfm.component';

describe('CrudfmComponent', () => {
  let component: CrudfmComponent;
  let fixture: ComponentFixture<CrudfmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudfmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
