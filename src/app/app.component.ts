import {Component, OnInit} from '@angular/core';
import {Task} from "./shared/task";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "./shared/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  toDoArray: Task[] = [];
  isOpenForm: boolean = false;

  constructor(private data: TaskService) {
  }

  ngOnInit() {
    this.toDoArray = this.data.getTaskArray();
    this.data.taskStream$.subscribe(tasks => this.toDoArray = tasks);
  }

  openForm() {
    this.isOpenForm = true;
  }

  closeForm() {
    this.isOpenForm = false;
  }
}
