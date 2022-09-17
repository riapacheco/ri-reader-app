import { animate, state, style, transition, trigger } from '@angular/animations';

export const menuSlideOut = trigger('menuTrigger', [
  state('open', style({ transform: 'translateX(0%)' })),
  state('close', style({ transform: 'translateX(-150%)' })),
  transition('open <=> close', [
    animate('350ms ease-in-out')
  ])
]);
export const toggleSlide = trigger('toggleControlTrigger', [
  state('off', style({ transform: 'translateX(0%)'})),
  state('on', style({ transform: 'translateX(100%)'})),
  transition('on <=> off', [
    animate('200ms ease-in-out')
  ])
])
