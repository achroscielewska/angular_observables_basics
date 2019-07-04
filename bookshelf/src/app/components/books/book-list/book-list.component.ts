import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  private bookSub: Subscription;

  constructor(public bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.bookSub = this.bookService.getBooksUpdateListener().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  ngOnDestroy() {
    this.bookSub.unsubscribe();
  }

}
