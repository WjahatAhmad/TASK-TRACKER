import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgModel} from '@angular/forms';
import { Task } from 'src/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(!this.text){
      alert('Please Add A task');
      return;
    }
    if(!this.day){
      alert('Please Add A Date');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
