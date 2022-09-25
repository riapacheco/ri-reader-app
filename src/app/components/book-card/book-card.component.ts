import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() cardTitle: string = 'Default Card Title';
  @Input() cardCoverImage: any = '../../../assets/backgrounds/paint/background_BOB.png';
  @Input() timestamp: any = '2022/09/23 7:59:00PM';
  @Input() author: string = 'Ria Pacheco';
  @Input() target: string = 'riaPacheco';
  @Input() description: string = '';
  @Input() passageCount!: number;;
  @Input() cardCount!: number;

  placeholderImage = '';


  constructor() { }

  ngOnInit(): void {
  }

  private addPlaceholder() {
    
  }
}
