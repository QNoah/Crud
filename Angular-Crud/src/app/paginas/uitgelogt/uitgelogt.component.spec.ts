import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UitgelogtComponent } from './uitgelogt.component';

describe('UitgelogtComponent', () => {
  let component: UitgelogtComponent;
  let fixture: ComponentFixture<UitgelogtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UitgelogtComponent]
    });
    fixture = TestBed.createComponent(UitgelogtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
