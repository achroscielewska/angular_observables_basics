import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Book } from './book.model';

@Injectable({providedIn: 'root'})
export class BookService {
  private books: Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  getPosts() {
    return [...this.books];
  }

  getPostUpdateListener() {
    return this.booksUpdated.asObservable();
  }

  addPost(book: Book) {
    this.books.push(book);
    this.booksUpdated.next([...this.books]);
  }

}
