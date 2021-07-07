import { CommonService } from './../../../services/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
adminregisterForm:any;
  constructor(private fb:FormBuilder,private router:Router,private commonservice:CommonService) { }

  ngOnInit(): void {
    this.adminregisterForm=this.fb.group({
      email:[null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:[null,[Validators.required,Validators.minLength(6)]],
      name:[null,Validators.required],
      gender:[null,Validators.required],
      country:[null,Validators.required],
    });
  }

  adminregister(){
var obj=this.adminregisterForm.value;
this.commonservice.adminregister(obj).subscribe((res:any)=>{
  console.log(res);
  if(res.ack==false)
  {
    alert("error");
  }else{
    alert("record inserted succeessfully");
    this.router.navigate(["/changepassword"]);
  }
})
  }
}
