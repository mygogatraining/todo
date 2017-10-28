import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';

import { TodoService } from './todo.service';
import { Todo } from './todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  
  public completedTodos: number = 0;
  public archivedTodos: number = 0;
  public todos: Todo[] = [];
  public hideTodos: boolean = false;
  public hideArchivedTodo: boolean = false;
  public items: any = [];
  public completedTasks: any;
  public todosFormGroup: FormGroup;
  public theme: any = {
    color: 'theme--white'
  };

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTodos();
    this.todosFormGroup = this.formBuilder.group({
      items: this.formBuilder.array([]),
      completedTasks: this.formBuilder.array([])
    });
  }

  public createItem(title?, completed?, archived?, userId?, id?): FormGroup {
    return this.formBuilder.group({
      title: title || '',
      completed: completed ||  false,
      archived: archived || false,
      userId: userId || null,
      id: id || null
    });
  }

  public addTodo(): void {
    this.items = this.todosFormGroup.get('items') as FormArray;
    let todo = this.createItem();
    this.items.push(todo);
    this.createTodo(todo.controls);

  }

  public getTodos() {
    this.todoService.getTodos().subscribe((todos: Todo[]) => {
      this.items = this.todosFormGroup.get('items') as FormArray;
      this.completedTasks = this.todosFormGroup.get('completedTasks') as FormArray;
      todos.forEach((todo: Todo) => {
        if(!this.items) {
          this.items = [];
        }
        if(!this.completedTasks){
          this.completedTasks = [];
        }
        if(todo.getCompleted()) {
          this.completedTasks.push(this.createItem(todo.getTitle(), todo.getCompleted(), todo.getArchived(), todo.getUserId(), todo.getId()));
        } else {
          this.items.push(this.createItem(todo.getTitle(), todo.getCompleted(), todo.getArchived(), todo.getUserId(), todo.getId()));
        }
      })
      console.log(this.items);
      this.getCompletedTodos();
      this.getArchivedTodos();
    }, error => {
      console.log("error occured!");
    });

  }

  public markCompleted(todo, event) {
      let updateTodoRef: Todo = new Todo();
      updateTodoRef.setArchived(todo.archived.value);
      updateTodoRef.setUserId(todo.userId.value);
      updateTodoRef.setId(todo.id.value);
      updateTodoRef.setTitle(todo.title.value);
      if(event.checked) {
        updateTodoRef.setCompleted(true);
        this.updateCompletedTodo(updateTodoRef); 
      } else {
        updateTodoRef.setCompleted(false);
        updateTodoRef.setArchived(false);
        this.undoCompletedTodo(updateTodoRef);
      }
      this.getCompletedTodos();
  }

  public removeFromItems(id) {
    let array = this.items.controls.filter(i => {
      return i.controls.id.value !== id
    });  
    this.items.controls = array;
  }

  public removeFromCompletedTasks(id) {
    let array = this.completedTasks.controls.filter(i => {
      return i.controls.id.value !== id
    });  
    this.completedTasks.controls = array;
    this.getCompletedTodos();
  }

  public changeTodo(todo) {
    if(!todo.id.value) {
      this.createTodo(todo);
      return;
    }
    let updateTodoRef: Todo = new Todo();
    updateTodoRef.setArchived(todo.archived.value);
    updateTodoRef.setUserId(todo.userId.value);
    updateTodoRef.setId(todo.id.value);
    updateTodoRef.setTitle(todo.title.value);
    updateTodoRef.setCompleted(todo.completed.value);
    this.updateTodo(updateTodoRef);
  }

  public updateTodo(todo) {
    this.todoService.updateTodo(todo).subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    })
  }

  public updateCompletedTodo(todo) {
    this.todoService.updateTodo(todo).subscribe(success => {
      this.completedTasks.push(this.createItem(todo.getTitle(), todo.getCompleted(), todo.getArchived(), todo.getUserId(), todo.getId()));
      this.removeFromItems(todo.getId());
      this.getCompletedTodos();
    }, error => {
      console.log(error);
    })
  }

  public undoCompletedTodo(todo) {
    this.todoService.updateTodo(todo).subscribe(success => {
      this.items.push(this.createItem(todo.getTitle(), todo.getCompleted(), todo.getArchived(), todo.getUserId(), todo.getId()));
      this.removeFromCompletedTasks(todo.getId());
    }, error => {
      console.log(error);
    })
  }

  public deleteTodo(todo) {
    if(!todo.id.value) {
      let array = this.items.controls.filter(i => {
        return i.controls.id.value !== todo.id.value
      });  
      this.items.controls = array;
      return;
    }
    this.todoService.deleteTodo(todo.id.value).subscribe(success => {
      this.removeFromItems(todo.id.value);
      console.log(success);
    }, error => {
      console.log(error);
    })  
  }

  public deleteCompletedTodo(todo) {
    this.todoService.deleteTodo(todo.id.value).subscribe(success => {
      
      this.removeFromCompletedTasks(todo.id.value);
      this.getCompletedTodos();
      console.log(success);
    }, error => {
      console.log(error);
    })  
  }

  public archiveTodo(todo: Todo) {
    if(todo.getArchived()) {
      todo.setArchived(false);
    } else {
      todo.setArchived(true);
    }
    this.updateTodo(todo);
  }

  public createTodo(todo) {
    let newTodo: Todo = new Todo();
    newTodo.setTitle(todo.title.value);
    newTodo.setCompleted(false);
    newTodo.setArchived(false);
    newTodo.setUserId(1);
    this.todoService.createTodo(newTodo).subscribe((newTodo: Todo) => {
      todo.id.setValue(newTodo.getId());
    }, error => {
      console.log("error occured!");
    })
  }

  public getCompletedTodos() {
    this.completedTasks.controls ? this.completedTodos = this.completedTasks.controls.length : this.completedTodos = 0;
  }

  public getArchivedTodos() {
    this.archivedTodos = 0;
    this.todos.forEach((todo: Todo) => {
      if(todo.getArchived()) {
        this.archivedTodos++;
      }
    })
  }

  public hideCompletedTodos() {
    this.hideTodos? this.hideTodos = false : this.hideTodos = true;
  }

  public hideArchivedTodos() {
    this.hideArchivedTodo? this.hideArchivedTodo = false : this.hideArchivedTodo = true;
  }

  public allowDrop(event) {
    event.preventDefault();
  }

  public drag(event) {
    // event.dataTransfter.setData("text", event.target.id);
    console.log(event);
  }

  public drop(event) {
    event.preventDefault();
    console.log(event);
  }

  public markAllAsCompleted() {
    if(!this.items) return;
    this.items.controls.forEach(todo => {
      let updateTodoRef: Todo = new Todo();
      updateTodoRef.setArchived(todo.controls.archived.value);
      updateTodoRef.setUserId(todo.controls.userId.value);
      updateTodoRef.setId(todo.controls.id.value);
      updateTodoRef.setTitle(todo.controls.title.value);
      updateTodoRef.setCompleted(true);
      this.updateCompletedTodo(updateTodoRef);
    });
  }

  public markAllAsInCompleted() {
    if(!this.completedTasks) return;
    this.completedTasks.controls.forEach(todo => {
      let updateTodoRef: Todo = new Todo();
      updateTodoRef.setArchived(false);
      updateTodoRef.setUserId(todo.controls.userId.value);
      updateTodoRef.setId(todo.controls.id.value);
      updateTodoRef.setTitle(todo.controls.title.value);
      updateTodoRef.setCompleted(false);
      this.undoCompletedTodo(updateTodoRef);
    });
  }

  public changeTheme(color: string) {
    this.theme.color = color;
  }

}
