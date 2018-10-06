import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
    @Input('type') type: string;
    @Input('id') id: number;
    @Input('fields') values: any[];

    @Output() delete = new EventEmitter<number>();

    deleteItem(event,id) {
        this.delete.emit(id);
    }
}
