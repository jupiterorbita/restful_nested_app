import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { BobbyService } from './bobby.service';
import { JimmyService } from './jimmy.service';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BobbyService, JimmyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
