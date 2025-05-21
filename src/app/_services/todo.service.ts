import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoForListModel, TodoForSaveModel } from '../_models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  getNotes(): Observable<TodoForListModel[]>{
    return this.http.get<TodoForListModel[]>('https://todoapi.farinkavoshan.ir/api/Todo/List')
  }

  addNote(newNote: TodoForSaveModel): Observable<TodoForListModel> {
    return this.http.post<TodoForListModel>('https://todoapi.farinkavoshan.ir/api/Todo/Add', newNote)
  }

editNote(id: number, data: Partial<TodoForListModel>, updatedNote: TodoForListModel): Observable<TodoForListModel> {
  return this.http.put<TodoForListModel>('https://todoapi.farinkavoshan.ir/api/Todo/Put', updatedNote);
  }
}
