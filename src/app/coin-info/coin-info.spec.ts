import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinInfo } from './coin-info';

describe('CoinInfo', () => {
  let component: CoinInfo;
  let fixture: ComponentFixture<CoinInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
