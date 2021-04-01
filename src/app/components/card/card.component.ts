import { Component, Input} from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() text:string="";
    @Input() color:string="";
    @Input() link:string="";
}