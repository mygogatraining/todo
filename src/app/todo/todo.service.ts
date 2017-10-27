import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  public getTodos(): Observable<Todo[]> {
    
    return this.http.get("http://localhost:3000/todos").map((response: Response) => {

      let todos: Todo[] = [];
      response.json().forEach(todo => {
          todos.push(Todo.fromObject(todo));
      });

      return todos;

    })
  }

  public updateTodo(todo: Todo): Observable<any> {

    let options: RequestOptions = new RequestOptions();
    options.headers = new Headers({'Content-Type': 'application/json'});
    
    return this.http.put(`http://localhost:3000/todos/${todo.getId()}`, JSON.stringify(todo), options).map((response: Response) => {
      return "success";
    })
    
  }

  public createTodo(todo: Todo): Observable<any> {

    let options: RequestOptions = new RequestOptions();
    options.headers = new Headers({'Content-Type': 'application/json'});
    
    return this.http.post(`http://localhost:3000/todos/`, JSON.stringify(todo), options).map((response: Response) => {
      return Todo.fromObject(response.json());
    })

  }

  public deleteTodo(id:number): Observable<any> {

    return this.http.delete(`http://localhost:3000/todos/${id}`).map((response: Response) => {
      return "success";
    })

  }

}
