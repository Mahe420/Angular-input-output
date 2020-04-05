import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @ViewChild('child')
  childInput;

  @Input()  
  parentToChild:string;

  @Output()
  childToParent =new EventEmitter<string>();

  constructor() {
   }

  ngOnInit(): void {
  }

  sendToParent(){
    this.childToParent.emit(this.childInput.nativeElement.value);
  }

}
