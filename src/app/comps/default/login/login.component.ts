import { CommonService } from './../../../services/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:any;

  constructor(private fb:FormBuilder,private commonservice:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:[null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:[null,[Validators.required,Validators.minLength(6)]]
    });
  }

  login(){
var obj=this.loginForm.value;
this.commonservice.login(obj).subscribe((res:any)=>{
  console.log(res);
  if(res.success==false){
    alert("invalid login");
  }else{
    alert("login successful");
    this.router.navigate(["/"]);
  }
});
  }
}
