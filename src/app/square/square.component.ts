import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button mat-flat-button *ngIf="!value" color="primary" [disabled]=disabled>{{value}}</button>
  <button mat-flat-button *ngIf="value == 'X'" color="accent" [disabled]=disabled>{{value}}</button>
  <button mat-flat-button *ngIf="value == 'O'" color="warn" [disabled]=disabled>{{value}}</button>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X'|'O'='X';
  @Input() disabled = false;

constructor(){
}

}
