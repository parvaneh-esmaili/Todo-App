import { Component, OnInit } from '@angular/core';
import { TodoForListModel } from '../../../../_models/todo.model';
import { TodoService } from '../../../../_services/todo.service';
import { NgClass, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  todos: TodoForListModel[] = [];
  selectedId: number | null = null;
  date = new Date();

  constructor(private todoService: TodoService) {}

ngOnInit() {
  this.todoService.getNotes().pipe(
    map(data => data || []),
    startWith([{ id: 0, title: 'Loading your data, please wait...', description: '', date: this.date } as TodoForListModel])
  ).subscribe(data => {
    this.todos = data;
  });
}
  deleteNote(id: number) {
    this.todoService.deleteNote(id).subscribe(() => {
      this.todos = this.todos.filter(notes => notes.id !== id);
    });
  }
}
