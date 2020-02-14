import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, share, shareReplay } from 'rxjs/operators';
import { BookStoreService } from 'src/app/book/shared/book-store.service';
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
    shareReplay(1)
    );


  constructor(private route: ActivatedRoute, private bs: BookStoreService) {

  }



  }
// http und actiatedRoute muss nicht unsubscribed werden


