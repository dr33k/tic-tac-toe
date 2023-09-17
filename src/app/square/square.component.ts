import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button mat-flat-button color="primary">{{value}}</button>`,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X'|'O'='X';

constructor(){
}

}
