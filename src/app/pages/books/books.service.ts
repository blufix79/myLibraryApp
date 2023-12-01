import { firstValueFrom } from 'rxjs';
import { Book } from '@/models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get<Book>('books');
  }

  saveBook(book: Book){
    //return this.http.post('books',)
  }
}
