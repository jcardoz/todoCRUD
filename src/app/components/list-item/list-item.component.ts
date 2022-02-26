import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../types/todo-item';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: TodoItem | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
