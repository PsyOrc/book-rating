import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observer, timer, Subscription, Observable } from 'rxjs';
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

    const observer = {
      next: s => console.log(s),
      error: err => console.error(err),
      complete: () => console.log('Complete')
    };


    const observable = new Observable(obs => {
      obs.next('😇');
      obs.next('🤩');
      const timeout = setTimeout(() => obs.next('😎'), 1000);
      setTimeout(() => obs.complete(), 2000);
      // obs.error('Fehler!');

      return () => {
        console.log('Da hat einer unsubscribed');
        clearTimeout(timeout);
      }
    });

    const sub = observable.subscribe(observer);
    setTimeout(() => sub.unsubscribe());

    // const subcription = timer(0, 250).subscribe(console.log);

  }
// http und actiatedRoute muss nicht unsubscribed werden

}
