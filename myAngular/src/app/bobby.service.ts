import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BobbyService {

  constructor(private _http: HttpClient) {

    // this.getTasks();
    this.getTask();
    // this.destroy();
  }

  getTasks() {   // 8
    // const tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log('got our tasks (bobby)!', data));
    return this._http.get('/tasks'); // 9
  }

  getTask() {
    const tempObservable = this._http.get('/task/5b235519a36b0456600d8dd0');
    tempObservable.subscribe(data => console.log('got our tasks from bobby.service.ts!', data));
  }

  destroy() {
    const tempObservable = this._http.delete('/tasks/5b235519a36b0456600d8dd0');
    tempObservable.subscribe(data => console.log('got our tasks from bobby.service.ts!', data));
  }
}
