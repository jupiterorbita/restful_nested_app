import { JimmyService } from './jimmy.service';
import { BobbyService } from './bobby.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent implements OnInit { // 0
export class AppComponent {
  task_arr = null; // 1
  selectedTask = null;
    // title = 'MEAN STACK';
  constructor(
    private _bobbyService: BobbyService, // 2
    private _jimmyService: JimmyService // 3
  ) { }

  // ngOnInit() { // 4
  //   this.getTasksFromService(); // 5
  // }

  onButtonClickBOB() {
    this.getTasksFromService();
  }

  taskToShow(task): void {
    console.log('clicked event show desc', task);
    this.selectedTask = task;
  }


  getTasksFromService() { // 6
    const observable = this._bobbyService.getTasks(); // 7, 10
    observable.subscribe( server_response => { // 11
      console.log('got our task_arr (bobby) app.component.ts =>!', server_response); // 12
      this.task_arr = server_response['data']; // 13
    });
  }

}
