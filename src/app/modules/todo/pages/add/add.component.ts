import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../../../_services/todo.service';
import { TodoForSaveModel } from '../../../../_models/todo.model';

@Component({
  selector: 'app-add',
  standalone: true, // ✅ اگر استفاده می‌کنی، اضافه باشه
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'] // ✅ املای درست: styleUrls
})
export class AddComponent {
  newTodo: TodoForSaveModel = new TodoForSaveModel();

  constructor(private todoService: TodoService) {}

  saveTodo() {
    this.todoService.addNote(this.newTodo).subscribe(response => {
      console.log('Todo saved:', response);
      this.newTodo = new TodoForSaveModel(); // فرم رو پاک می‌کنه
    });
  }
}
