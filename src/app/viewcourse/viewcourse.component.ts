import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private api:ApiService) {

    api.viewcourse().subscribe(
      (response)=>
      {
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }

  data:any=[]








  

}
