import { Router } from '@angular/router';
import { Book } from '../../models/book.model';
import { BooksService } from './books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books;

  constructor(private booksService: BooksService, private route: Router) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books: Book) => {
      this.books = books;
    });
  }

  newBook(){
    this.route.navigate(['book-add']);
  }






}
