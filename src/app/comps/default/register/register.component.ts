import { CommonService } from './../../../services/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:any;
  constructor(private fb:FormBuilder,private commonservice:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      email:[null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:[null,[Validators.required,Validators.minLength(6)]],
      name:[null,Validators.required],
      gender:[null,Validators.required],
      country:[null,Validators.required]
    });
  }

  register(){
    if(this.registerForm.valid){
      var obj=this.registerForm.value;
      this.commonservice.register(obj).subscribe((res:any)=>{
        console.log(res);
        if(res.ack==false){
          alert("Error");
        }else{
        alert("record inserted successfully");
        this.router.navigate(["/login"]);
      }
      });
    }
    else{
      alert("Enter valid details");
    }
  }
}
