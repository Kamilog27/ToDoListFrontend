import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Homework } from '../models/homework';
@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  URL_API="http://localhost:3000/api/homeworks"
  
  selectedHomework:Homework={
    name:""
  
  };
  homeworks!:Homework[];

  constructor(public http:HttpClient) { }

  getHomeworks(){
    return this.http.get<Homework[]>(this.URL_API);
  }
  createHomework(homework:Homework){
    return this.http.post(this.URL_API,homework);
  }
  putHomework(homework:Homework){
    return this.http.put(`${this.URL_API}/${homework._id}`,homework)
  }
  deleteHomework(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
