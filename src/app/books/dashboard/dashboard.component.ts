import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import * as data from '../data/books.json';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  constructor(private br: BookRatingService) { }

  // ngOnInit(): void
  ngOnInit() {
    this.books = [
      { isbn: '1112345',
        title: 'angular',
        description: 'Angular das Buch',
        rating: 5
      },
    ];
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
}
