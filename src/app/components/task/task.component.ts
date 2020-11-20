import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../shared/task";
import {TaskService} from "../../shared/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  constructor(private data: TaskService) {
  }

  ngOnInit(): void {
  }

  deleteTask() {
    this.data.deleteSelectedTask(this.task.id);
  }
}
