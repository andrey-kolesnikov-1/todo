import {Component, OnInit} from '@angular/core';
import {Task} from "./shared/task";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  form: FormGroup;
  toDoArray: Task[] = [];
  idTask: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      text: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  addNewTask() {
    this.toDoArray.unshift({title: this.form.value.title, text: this.form.value.text, id: ++this.idTask});
    this.form.reset();
  }

  deleteSelectedTask(id: number) {
    this.toDoArray = this.toDoArray.filter(value => value.id != id);
  }
}
