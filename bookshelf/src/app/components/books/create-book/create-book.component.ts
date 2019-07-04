import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  constructor(public bookService: BookService) { }

  ngOnInit() {
  }

  addBook(form: NgForm) {
    if ( form.invalid ) {
      return true;
    }
    const book: Book = {
      title: form.value.title,
      description: form.value.description,
      bookshelfNo: form.value.bookshelfNo
    };

    this.bookService.addBook(book);
    form.resetForm();
  }

}
