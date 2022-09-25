import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() userImage = 'https://ik.imagekit.io/fuc9k9ckt2b/IMG_0632_copy_a_RDINYPh.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1657595086839';
  @Input() actionButton = { icon: 'bookmark_add', target: '' };
  @Input() titleText = '';
  @Input() input = { placeholder: 'Search + Enter', boundedString: '', prefixIcon: 'search' };
  @Input() badge = { state: 'success' }
  @Output() avatarClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() enterDown: EventEmitter<any> = new EventEmitter<any>();
  @Output() keydown = new EventEmitter<any>();

  isLargeBar = true;

  inputFocused!: boolean;

  greetings = [
    'Good morning',
    'Good afternoon',
    'Good evening'
  ];
  constructor() { }

  ngOnInit(): void {
    this.updateGreeting();
  }

  // Greeting based on time of day
  updateGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.titleText = this.greetings[0];
    }
    else if (hour < 18) {
      this.titleText = this.greetings[1];
    }
    else {
      this.titleText = this.greetings[2];
    }
  }
  onInputFocusToggle(inputState: string) {
    if (inputState == 'typing') { this.inputFocused = true; }
    else if (inputState == 'done') { this.inputFocused = false; }
    else { this.inputFocused = false; }
  }

  // Methods
  onAvatarClick(event: any) {
    this.avatarClick.emit(event);
  }
  onActionClick(event: any, data: string) {
    if (event) { this.actionButtonClick.emit(data); }
  }
  onEnter() {
    this.enterDown.emit(this.input.boundedString);
  }
  onKeydown(event: any) {
    this.keydown.emit(event.key);
  }
}
