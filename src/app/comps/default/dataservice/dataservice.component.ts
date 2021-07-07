import { CommonService } from './../../../services/common.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dataservice',
  templateUrl: './dataservice.component.html',
  styleUrls: ['./dataservice.component.css']
})
export class DataserviceComponent implements OnInit {

  data:any;

  constructor(private commonservice:CommonService) { }

  ngOnInit(): void
   {
        this.showData();
   }

   showData(){
    this.commonservice.getdata().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
     })
   }
}
