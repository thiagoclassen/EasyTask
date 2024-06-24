import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { TaskDto } from "../task/task.model";
import { TasksService } from "../tasks.service";
import { User } from "../../user/user.model";

@Component({
  selector: 'app-new-task',
  styleUrl: './new-task.component.css',
  templateUrl: './new-task.component.html'
})
export class NewTaskComponent {
  @Input({ required: true }) user?: User;
  @Output() close = new EventEmitter<void>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  constructor(private tasksService: TasksService) {}

  onCancel(): void {
    this.close.emit();
  }

  onSubmit(): void {
    let newTask: TaskDto = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    };
    this.tasksService.addTask(newTask, this.user!.id);
    this.close.emit();
  }
}
