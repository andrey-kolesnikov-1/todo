import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../shared/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteTask() {
    this.onDelete.emit(this.task.id);
  }
}
