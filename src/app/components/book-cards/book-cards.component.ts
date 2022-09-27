import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent implements OnInit {
  @Input() bookCards!: any[];
  images = [
    'First image',
    'second image',
    'third image',
    'fourth image'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
