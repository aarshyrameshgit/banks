import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // uname=""
  // acno=""
  // pwd=""

  //register model creation
  registerForm=this.fb.group({
    //creating form array
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
  })


  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  register(){
    // console.log(this.registerForm.get('uname')?.errors);
    
    // alert("Register clicked")

    var acno=this.registerForm.value.acno
    var pwd=this.registerForm.value.pwd
    var uname=this.registerForm.value.uname
    
    if(this.registerForm.valid){
   //asynchronous
    this.ds.register(acno,pwd,uname)
    .subscribe((result:any)=>{
      if (result){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )  // aftr this value it will go to data service .ts and reg prgrm executes

    
  }
  else{
    alert("Invalid Form")
  }
}
}
