import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() myInputValue:string;
  @Output() myOutPutValue=new EventEmitter<String>();

outvalue="i am a chile";

  constructor() { }

  ngOnInit(): void {
    console.log(this.myInputValue);

  }
  sendData(){
    this.myOutPutValue.emit(this.outvalue);

  }

}
