import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

    bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
    });

    isInvalid(name: string) {
      const control = this.bookForm.get(name);
      return control.touched && control.invalid && !control.pristine;
    }

    hasError(name: string, code: string) {
      const control = this.bookForm.get(name);
      return control.touched && control.hasError(code) && control.pristine;
    }

    submitForm() {
      const newBook = {
        ...this.bookForm.value,
        rating: 1
      };

      // ??
      // 1. erstelle eventemitter (Name: create)
      // 2. emitte das neue buch
      // 3. empfange das neue buch im dashboard
      // 4. füge das neue buch dem array hinzu
      
      this.bookForm.reset();
    }
}
