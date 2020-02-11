import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: string[];

  constructor() { }

  // ngOnInit(): void
  ngOnInit() {
    this.books = ['Angular', 'AngularJS', 'Python', 'Scale'];
  }

}
