import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {

    const bookRatingMock = {
      rateUp: book => book
    };

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: bookRatingMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp should forward the execution to BookRatingService', () => {
    const ratingService = TestBed.inject(BookRatingService);
    spyOn(ratingService, 'rateUp').and.callThrough();

    const testBook = { isbn: '000' } as Book;
    component.doRateUp(testBook);

    expect(ratingService.rateUp).toHaveBeenCalled();
    expect(ratingService.rateUp).toHaveBeenCalledWith(testBook);
  });
});
