import { CommonService } from './../../../services/common.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { passwordMatch } from 'src/app/shared/passwordMatch.validtor';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm:any;

  constructor(private fb:FormBuilder,private router:Router,private commonservice:CommonService) { }



  ngOnInit(): void {
    this.changePasswordForm=this.fb.group({
      email:[null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:[null,[Validators.required,Validators.minLength(6)]],
      confirmpassword:[null,Validators.required]
    },
      {validator:passwordMatch});
  }


  submit(){
    if(this.changePasswordForm.valid)
    {
      var obj=this.changePasswordForm.value;
    this.commonservice.updatepassword(obj).subscribe((res:any)=>{
      // console.log(res);
      if(res.ack==false){
        alert("Error");
      }else{
      alert("Updated Succeessfully");
      this.router.navigate(["/login"]);
    }
    })
    }else{
      alert("Please enter valid details");
    }
  }



}
