import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Book } from './book.model';

@Injectable({providedIn: 'root'})
export class BookService {
  private books: Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  getBooks() {
    return [...this.books];
  }

  geBooksUpdateListener() {
    return this.booksUpdated.asObservable();
  }

  addBook(book: Book) {
    this.books.push(book);
    this.booksUpdated.next([...this.books]);
  }

}
