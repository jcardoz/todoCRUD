import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addNewItem on click of "Add a new item" button', () => {
    // arrange
    const spy = spyOn(component, 'addNewItem').and.callThrough();

    // act
    const listContainer: HTMLElement = fixture.nativeElement;
    // 1st button
    const addNewItemButton = listContainer.querySelectorAll('button')[0];
    addNewItemButton.click();

    // assert
    expect(component.addNewItem).toHaveBeenCalled();
  });

  it('should call deleteItem on click of "Delete first item" button', () => {
    // arrange
    const spy = spyOn(component, 'deleteFirstItem').and.callThrough();

    // act
    const listContainer: HTMLElement = fixture.nativeElement;
    // 2nd button
    const deleteButton = listContainer.querySelectorAll('button')[1];
    deleteButton.click();

    // assert
    expect(component.deleteFirstItem).toHaveBeenCalled();
  });

  it('should call updateItem on click of "Update item" button', () => {
    // arrange
    const spy = spyOn(component, 'updateItem').and.callThrough();

    // act
    const listContainer: HTMLElement = fixture.nativeElement;
    // 3rd button
    const updateButton = listContainer.querySelectorAll('button')[2];
    updateButton.click();

    // assert
    expect(component.updateItem).toHaveBeenCalled();
  });
});
