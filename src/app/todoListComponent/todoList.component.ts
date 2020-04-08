import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todoList.service';

import { Todo } from '../todo'

import { SortCriteria } from '../pipes/sort.pipe';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
  styles: [ `
    toggle-button {
      margin: 0 auto;
    } 
  `]
})
export class TodoListComponent implements OnInit {

    todos:any; 
    loading:boolean=true;
    public criteria: SortCriteria;
    //checked: boolean;
    btnName:string='Ascending';
    
    constructor(private todoService: TodoService ){
      this.criteria = {
        property: 'workspaceName',
        descending: true
      };
    }

    ngOnInit(){
      this.todos=this.todoService.fetchData();
    }
    // assendingOrder(){
    //   return this.criteria.descending = false;
    // }

    // dessendingOrder(){
    //   return this.criteria.descending = !this.criteria.descending ;
    // }

    changeOrder(){
      this.btnName="Desending";
      this.criteria.descending = !this.criteria.descending
    }

      }