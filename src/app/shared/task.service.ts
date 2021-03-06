import {Injectable} from '@angular/core';
import {Task} from "./task";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskArray: Task[] = [];
  idTask: number = 0;
  taskStream$: Subject<Task[]> = new Subject<Task[]>();

  constructor() {
  }

  addNewTask(title: string, text: string) {
    this.taskArray.unshift({title: title, text: text, id: ++this.idTask});
    this.taskStream$.next(this.taskArray);
  }

  deleteSelectedTask(id: number) {
    this.taskArray = this.taskArray.filter(value => value.id !== id);
    this.taskStream$.next(this.taskArray);
  }
}
