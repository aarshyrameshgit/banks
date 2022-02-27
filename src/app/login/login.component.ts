import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"  //string interpolation
  accno="Account Number Please" // - example for property binding
  acno=""
  pwd=""
  
  database:any={
  1000:{acno:1000,uname:"Neer",password:1000,balance:5000},
  1001:{acno:1001,uname:"Vyom",password:1001,balance:5000},
  1002:{acno:1002,uname:"Laisha",password:1002,balance:5000}
}

  constructor() { }

  ngOnInit(): void {
  }

  //acno change
  acnoChange(event:any){
    
    this.acno=event.target.value
    console.log(this.acno);
  }
  //pwd change
  pwdChange(event:any){
    this.pwd=event.target.value
    console.log(this.pwd);
    
  }

// using template reference variable
  // login(a:any,p:any){
  //   console.log(a);
    
  //   var acno=a.value
  //   var pwd=p.value
  //   let database=this.database
  //   if(acno in database){
  //     if(pwd==database[acno]["password"]){
  //       alert("Login Sucess")
  //     }
  //     else{
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else{
  //     alert("User does not exist")
  //   }
  // }
 // user login
  login(){
    // alert("login clicked")
    var acno=this.acno
    var pwd=this.pwd
    let database=this.database
    if(acno in database){
      if(pwd==database[acno]["password"]){
        alert("Login Sucess")
      }
      else{
        alert("Incorrect Password")
      }
    }
    else{
      alert("User does not exist")
    }
  }


}
