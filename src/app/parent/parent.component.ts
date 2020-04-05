import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild('parent')
  parentInput;

  messageFromChild:string="";

  messageToChild:string="";



  constructor() { }

  ngOnInit(): void {
  }

  sendToChild(){
    this.messageToChild=this.parentInput.nativeElement.value;
  }

  msgFromChild(message:string){
    this.messageFromChild=message;
  }

}
