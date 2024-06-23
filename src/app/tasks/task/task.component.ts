import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";
import { TasksService } from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  imports: [
    CardComponent,
    DatePipe
  ],
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task?: Task;

  constructor(private taskService: TasksService) {}

  onCompleteTask(): void {
    this.taskService.removeTask(this.task!.id);
  }
}
