import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Homework } from 'src/app/models/homework';
import {HomeworkService} from "../../services/homework.service"
@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {


  constructor(public homeworkService:HomeworkService) { }

  ngOnInit(): void {
    this.getHomeworks()
  }

  getHomeworks(){
    this.homeworkService.getHomeworks().subscribe(
      res=>{
        this.homeworkService.homeworks=res;
      },
      err=>console.log(err)
    )

  }
  addHomework(form:NgForm){
    if(form.value._id){
      this.homeworkService.putHomework(form.value).subscribe(
        res=>console.log(res),
        err=>console.error(err)
      )
    }else{
      this.homeworkService.createHomework(form.value).subscribe(
        res=>{
          this.getHomeworks()
          form.reset()
        },
        err=>console.error(err)
      )
    }
  }
  
  deleteHomework(id:string){
    const res=confirm("¿Estas seguro de eliminar esta tarea?")
    if(res==true){
      this.homeworkService.deleteHomework(id).subscribe(
        res=>{
          this.getHomeworks()
        },
        err=>console.error(err)
      )
    }
  }

  editHomework(homework:Homework){
    this.homeworkService.selectedHomework=homework;
  }
}
