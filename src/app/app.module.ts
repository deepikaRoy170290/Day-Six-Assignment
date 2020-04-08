import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from "./TodoListComponent/todoList.component";
import { ToggleButtonComponent } from './toggleButtonComponent/toggleButton.component';
import {SortPipe} from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SortPipe,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
