import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dishmenu } from './dishmenu';

describe('Dishmenu', () => {
  let component: Dishmenu;
  let fixture: ComponentFixture<Dishmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dishmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dishmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
