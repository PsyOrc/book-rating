import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, share, shareReplay, catchError } from 'rxjs/operators';
import { BookStoreService } from 'src/app/book/shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent{

  show = false;
  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn)),
    catchError((err: HttpErrorResponse) => of({
      isbn: '000',
      title: 'Fehler beim laden von ' + err.statusText,
      description: 'error'
    }))
    );


  constructor(private route: ActivatedRoute, private bs: BookStoreService) {

  }



  }
// http und actiatedRoute muss nicht unsubscribed werden


