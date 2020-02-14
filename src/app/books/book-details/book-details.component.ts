import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observer, timer, Subscription } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  alive = true;
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
    of('😇', '😎', '🤩').subscribe(observer);

    timer(0, 250).pipe(
      takeWhile(() => this.alive))
      .subscribe(console.log);

  }
// http und actiatedRoute muss nicht unsubscribed werden

  ngOnDestroy() {
    this.alive = false;
  }
}
