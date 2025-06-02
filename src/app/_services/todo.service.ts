import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoForListModel, TodoForSaveModel } from '../_models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos'; 

  constructor(private http: HttpClient) { }

  getNotes(): Observable<TodoForListModel[]> {
    return this.http.get<TodoForListModel[]>(this.apiUrl);
  }

  addNote(newNote: TodoForSaveModel): Observable<TodoForListModel> {
    return this.http.post<TodoForListModel>(this.apiUrl, newNote);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  update(note: TodoForListModel): Observable<TodoForListModel> {
    return this.http.patch<TodoForListModel>(`${this.apiUrl}/${note.id}`, note);
  }
}

