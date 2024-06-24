import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { User } from "../user/user.model";
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: User;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) { }

  get SelectedUserTasks() {
    return this.tasksService.getUserTasks(this.user!.id);
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onClose(): void {
    this.isAddingTask = false;
  }
}
