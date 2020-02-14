import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observer, timer, Subscription, Observable, concat } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';
@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => this.isbn = paramMap.get('isbn')
    );

    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      map(x => x * 10), // multipliziert x * 10
      filter(x => x > 30), // filtert alle zahlen unter 30 raus
      reduce((x,y) => x + y), // summiert das ergebnis
      map(x => '❤️'.repeat(x))
    ).subscribe(console.log); // gibt x ❤️ aus

  }
// http und actiatedRoute muss nicht unsubscribed werden

}
