import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss'],
})
export class PersonalCardComponent  implements OnInit {
  
  private _isFav:boolean = false
  @Input() name:string = "";
  @Input() surname:string = "";
  @Input() age:number = 0;
  @Input() set isFav(value:boolean){
    this._isFav = value
  } 

  @Output() favClicked:EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {}

  OnFavClicked(idx:number){
    !this.isFav
  }
}
