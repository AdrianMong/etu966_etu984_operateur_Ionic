import { Component, Input} from '@angular/core';

@Component({
  selector: 'headerback-component',
  templateUrl: './headerback.component.html',
})
export class HeaderBackComponent {
    @Input() title:string="";
    @Input() link:string="";
}