import { Component, Input, OnInit } from '@angular/core';

export const FALLBACK_COVERS = [
  '../../../assets/backgrounds/paint/background_BOB.png',
  '../../../assets/backgrounds/paint/background_BP.png',
  '../../../assets/backgrounds/paint/background_PinkR.png',
  '../../../assets/backgrounds/paint/background_PR.png',
  '../../../assets/backgrounds/paint/background_YB.png',
  '../../../assets/backgrounds/paint/background_YGR.png'
];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() cards = [{
      cover_image: '',
      title: '',
      author: '',
      passage_count: null
    }];
  constructor() { }

  ngOnInit(): void {
  }

  public getFallbackImage(index: number) {
    const cycledImage = FALLBACK_COVERS[index % FALLBACK_COVERS.length];
    return cycledImage;
  }
}
