import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtComponent } from './overzicht.component';

describe('OverzichtComponent', () => {
  let component: OverzichtComponent;
  let fixture: ComponentFixture<OverzichtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverzichtComponent]
    });
    fixture = TestBed.createComponent(OverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
