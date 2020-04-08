import { Injectable } from "@angular/core";
import {  HttpClient  } from '@angular/common/http';

//import { Todo } from '../todo'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todoapiUrl:string='http://localhost:3000/todo';

    constructor(private http: HttpClient) {}
    
   
    fetchData(){
        
        return this.http.get(this.todoapiUrl)
        
        
    }


    }

