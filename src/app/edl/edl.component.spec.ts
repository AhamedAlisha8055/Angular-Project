import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdlComponent } from './edl.component';

describe('EdlComponent', () => {
  let component: EdlComponent;
  let fixture: ComponentFixture<EdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
