import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoofdpaginaComponent } from './hoofdpagina.component';

describe('HoofdpaginaComponent', () => {
  let component: HoofdpaginaComponent;
  let fixture: ComponentFixture<HoofdpaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoofdpaginaComponent]
    });
    fixture = TestBed.createComponent(HoofdpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
