import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button mat-flat-button color="primary" [disabled]=disabled>{{value}}</button>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X'|'O'='X';
  @Input() disabled = false;

constructor(){
}

}
