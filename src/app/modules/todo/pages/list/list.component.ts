import { Component } from '@angular/core';
import { TodoForListModel, TodoForSaveModel } from '../../../../_models/todo.model';
import { TodoService } from '../../../../_services/todo.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  todos: TodoForListModel[] = [];

  constructor(private todoService: TodoService ){
    this.todoService.getNotes().subscribe(x =>{
      this.todos = x })
  }
}
