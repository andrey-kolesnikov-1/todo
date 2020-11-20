import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../shared/task.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  isClose: boolean = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(private data: TaskService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      text: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  addNewTask() {
    this.data.addNewTask(this.form.value.title, this.form.value.text);
    this.form.reset();
  }

  closeForm() {
    this.isClose = true;
    setTimeout(() => {
      this.onClose.emit();
    }, 1000);
  }
}
