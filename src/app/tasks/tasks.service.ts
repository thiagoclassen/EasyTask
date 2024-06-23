import { Injectable } from '@angular/core';
import { dummyTasks } from "./dummy-tasks";
import { Task, TaskDto } from "./task/task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = dummyTasks;

  constructor() { }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskDto: TaskDto, userId: string): void {

    let task: Task = {
      id: Math.random().toString(),
      userId: userId,
      title: taskDto.title,
      summary: taskDto.summary,
      dueDate: taskDto.dueDate
    };

    this.tasks.unshift(task);
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
