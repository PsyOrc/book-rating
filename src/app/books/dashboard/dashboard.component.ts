import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

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
    this.books = [{
      isbn: '001',
      title: 'angular',
      description: 'tolles buch',
      rating: 5
    },
    {
      isbn: '002',
      title: 'ruby',
      description: 'doll',
      rating: 3
    },
    {
      isbn: '1',
      title: 'Python',
      description: 'genial',
      rating: 1
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
