import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoutPaginaComponent } from './fout-pagina.component';

describe('FoutPaginaComponent', () => {
  let component: FoutPaginaComponent;
  let fixture: ComponentFixture<FoutPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoutPaginaComponent]
    });
    fixture = TestBed.createComponent(FoutPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
