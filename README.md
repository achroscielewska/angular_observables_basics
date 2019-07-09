# Bookshelf

## Libraries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.
* [Angular Material](https://material.angular.io/)

## App structure
### Components
#### header

* `app-header` - display header app

#### books

* `app-book-create` - new book form
* `app-book-list` - display books list

* `Book` - book interface
* `BookService` - book service
methods added to service: getBooks, getBooksUpdateListener, addBook

## Basic task for books components

1. create `Book` interface
2. create `BookService`, add method `addBook`
3. create `app-book-create` component with `addBook()` method and connect it to `BookService`
4. in `BookService`, add method `getBooks` and `getBooksUpdateListener` (use observable to define it)
5.  create `app-book-list` component and `ngOnInit` call methods `getBooks` - this one give you books list as is and call method `getBooksUpdateListener` this is subscription 
6. in `app-book-list` component remember to add ngOnDestroy() method and unsubscibe subscription

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
