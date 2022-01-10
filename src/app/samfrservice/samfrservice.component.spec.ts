import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamfrserviceComponent } from './samfrservice.component';

describe('SamfrserviceComponent', () => {
  let component: SamfrserviceComponent;
  let fixture: ComponentFixture<SamfrserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamfrserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamfrserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
