import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
squares: any[]= [];
xIsNext: boolean = true;
winner?: string;
plays: number = 0;
lines: number[][] = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
 ]

constructor(){
}

ngOnInit(): void {
  this.newGame();
}

newGame():void{
  this.squares= Array(9).fill(null);
  this.xIsNext = true;
  this.winner = undefined;
}

get player(): 'X' | 'O'{
  return this.xIsNext ? 'X' : 'O';
}

makeMove(index: number){
  if(!this.squares[index]){
    this.squares.splice(index, 1, this.player);
    this.xIsNext = !this.xIsNext;
    this.plays++;
  }
  if(this.plays >= 5)this.calculateWinner();
}

calculateWinner(): void{
 for(var i = 0; i< this.lines.length; i++){
  var [a,b,c] = this.lines[i];
  if(this.squares[a] &&
    this.squares[a] === this.squares[b] &&
    this.squares[a] === this.squares[c]){
      this.winner = this.squares[a];
    }
 }
}
}
