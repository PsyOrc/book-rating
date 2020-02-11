import { Component, OnInit , Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  unFilledStar = '☆';
  filledStar = '★';
  starArray = ['☆', '☆', '☆', '☆', '☆'];
  starRating: string;

  ngOnInit() {
    this.setStars();
  }

  setStars() {
    if (this.book.rating) {
      for (let rating = 0; rating < this.book.rating; rating++) {
        this.starArray[rating] = this.filledStar;
      }
    }
    this.starRating = this.starArray.join('');
  }

  increase() {
    if (this.book.rating < 5 ) {
      this.book.rating += 1;
      this.setStars();
    }
  }

  decrease() {
    if (this.book.rating > 0 ) {
      this.book.rating -= 1;
      this.starArray[this.book.rating] = this.unFilledStar;
      this.setStars();
    }
  }
}
