import { Component,  OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book.interface';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: IBook[] = [
    {
      id: 0,
      title: 'Misbehaving',
      coverImage: 'https://ik.imagekit.io/fuc9k9ckt2b/misbehaving_kPREseu0O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663983750357',
      createdAt: new Date(),
      author: 'Richard H Thaler',
      target: '',
      description: '',
      passageCount: 6
    }
  ]

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.supabaseService.getAll('books', 'id', false).subscribe((res: any) => {
      this.books = res;
    })
  }
}
