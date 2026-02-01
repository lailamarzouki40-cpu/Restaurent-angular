import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bottom } from './bottom';

describe('Bottom', () => {
  let component: Bottom;
  let fixture: ComponentFixture<Bottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bottom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
