import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import * as data from '../data/books.json';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // Achtung Bug Provoziert
})
export class DashboardComponent implements OnInit {

  books: Book[];
  constructor(private br: BookRatingService) { }

  // ngOnInit(): void
  ngOnInit() {
    this.books = data.books;
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateBook(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    this.updateBook(ratedBook);
  }

  updateBook(ratedBook: Book) {
    this.books = this.books
      .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
      .sort((a, b) => b.rating - a.rating);
  }

  doAddBook(book: Book) {
    this.books = [...this.books, book];
  }
}
