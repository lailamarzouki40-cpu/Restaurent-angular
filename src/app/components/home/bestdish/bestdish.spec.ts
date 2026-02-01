import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestdish } from './bestdish';

describe('Bestdish', () => {
  let component: Bestdish;
  let fixture: ComponentFixture<Bestdish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestdish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bestdish);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
