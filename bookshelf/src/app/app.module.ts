import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule, MatExpansionModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import { BookCreateComponent } from './components/books/book-create/book-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
