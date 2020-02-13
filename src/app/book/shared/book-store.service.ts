import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/books/shared/book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>('https://api.angular.schule/books');
  }

  getSingleBook(isbn: string) {
    return this.http.get<Book>('https://api.angular.schule/books/' + isbn);
  }
}
