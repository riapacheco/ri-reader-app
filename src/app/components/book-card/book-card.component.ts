import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() cardTitle: string = 'Default Card Title';
  @Input() cardCoverImage: any = 'https://ik.imagekit.io/fuc9k9ckt2b/IMG_0632_copy_a_RDINYPh.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1657595086839';
  @Input() timestamp: any = '2022/09/23 7:59:00PM';
  @Input() author: string = 'Ria Pacheco';
  @Input() target: string = 'riaPacheco';
  @Input() description: string = '';
  @Input() passageCount: any = 7;

  placeholderImages = [
    '../../../assets/backgrounds/paint/background_BOB.png',
    '../../../assets/backgrounds/paint/background_BP.png',
    '../../../assets/backgrounds/paint/background_PinkR.png',
    '../../../assets/backgrounds/paint/background_PR.png',
    '../../../assets/backgrounds/paint/background_YB.png',
    '../../../assets/backgrounds/paint/background_YGR.png'
  ];


  constructor() { }

  ngOnInit(): void {
  }

  private addPlaceholder() {
    
  }
}
