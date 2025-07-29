import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDataComponant } from './news-data-componant';

describe('NewsDataComponant', () => {
  let component: NewsDataComponant;
  let fixture: ComponentFixture<NewsDataComponant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsDataComponant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDataComponant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
