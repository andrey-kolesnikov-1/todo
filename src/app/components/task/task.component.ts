import {Component, Input} from '@angular/core';
import {Task} from "../../shared/task";
import {TaskService} from "../../shared/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: Task;

  constructor(private data: TaskService) {
  }

  deleteTask() {
    this.data.deleteSelectedTask(this.task.id);
  }
}
