import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

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
  ].sort((a, b) => (a.rating < b.rating) ? 1 : -1);
  }
}
