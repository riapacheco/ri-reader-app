import { animate, state, style, transition, trigger } from '@angular/animations';

export const menuSlideOut = trigger('menuTrigger', [
  state('open', style({ transform: 'translateX(0%)' })),
  state('close', style({ transform: 'translateX(-150%)' })),
  transition('open <=> close', [
    animate('300ms ease-in-out')
  ])
]);