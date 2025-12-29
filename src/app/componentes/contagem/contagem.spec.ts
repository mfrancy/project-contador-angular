import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contagem } from './contagem';

describe('Contagem', () => {
  let component: Contagem;
  let fixture: ComponentFixture<Contagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
