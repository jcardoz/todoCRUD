import { TestBed } from '@angular/core/testing';
import { TodoItem } from '../components/types/todo-item';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListHelperService } from './list-helper.service';
import { BehaviorSubject } from 'rxjs';

describe('ListHelperService', () => {
  let service: ListHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ListHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    service.resetList();
  });

  it('should add an item to the list', () => {
    // arrange
    const newItem: TodoItem = {
      id: 100,
      body: 'SUPER FANCY NEW ITEM',
      isPending: true
    };

    // assert
    service.getListItems().subscribe((list: BehaviorSubject<TodoItem[]>) => {
      expect(list.value.length).toBe(4);
      console.log(list.value);
    });

    // act
    service.addNewItem(newItem);

    // assert
    service.getListItems().subscribe((list: BehaviorSubject<TodoItem[]>) => {
      expect(list.value.length).toBe(5);
      console.log(list.value);
    });
  });

  it('should update an item in the list', () => {
    // arrange
    const updatedItem: TodoItem = {
      id: 1,
      body: 'new body for item 1',
      isPending: true
    };

    // act
    service.updateItem(updatedItem);

    // assert
    service.getListItems().subscribe((list: BehaviorSubject<TodoItem[]>) => {
      expect(list.value.length).toBe(4);
      expect(list.value[0].body).toBe(updatedItem.body);
    });
  });

  it('should delete an item from the list', () => {
    // arrange
    const deletedItemId = 1;

    // act
    service.deleteItem(deletedItemId);

    // assert
    service.getListItems().subscribe((list: BehaviorSubject<TodoItem[]>) => {
      expect(list.value.length).toBe(3);
    });
  });
});
