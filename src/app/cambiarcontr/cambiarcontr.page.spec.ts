import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarcontrPage } from './cambiarcontr.page';

describe('CambiarcontrPage', () => {
  let component: CambiarcontrPage;
  let fixture: ComponentFixture<CambiarcontrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CambiarcontrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
