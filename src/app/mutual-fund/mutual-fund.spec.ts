import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFund } from './mutual-fund';

describe('MutualFund', () => {
  let component: MutualFund;
  let fixture: ComponentFixture<MutualFund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutualFund]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutualFund);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
