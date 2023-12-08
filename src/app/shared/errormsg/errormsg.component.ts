import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errormsg',
  templateUrl: './errormsg.component.html',
  styleUrls: ['./errormsg.component.css']
})
export class ErrormsgComponent {

  @Input()err:any|null=null;
  @Input()field:any|null=null;

 
}
