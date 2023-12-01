import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit{
  bookForm: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl('',Validators.required),
      author: new FormControl('',Validators.required),
      ISBN: new FormControl('',Validators.required),
      dateAdd: new FormControl('',Validators.required),
      dateRem: new FormControl('',Validators.required),
      plot: new FormControl('',Validators.required),
      readingsNumber: new FormControl(0,Validators.required),
      userId: new FormControl('',Validators.required)
    });
  }

  get id() {
    return this.bookForm.get('id');
  }
  get title(){
    return this.bookForm.get('title');
  }
  get author(){
    return this.bookForm.get('author');
  }
  get ISBN(){
    return this.bookForm.get('ISBN');
  }
  get dateAdd(){
    return this.bookForm.get('dateAdd');
  }
  get dateRem(){
    return this.bookForm.get('dateRem');
  }
  get plot(){
    return this.bookForm.get('plot');
  }
  get readingNumber(){
    return this.bookForm.get('readingNumber');
  }
  get userId(){
    return this.bookForm.get('userId');
  }


  saveBook(){
    if(this.bookForm.valid){

    }
  }

}
