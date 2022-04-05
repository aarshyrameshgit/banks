import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // acno=""
  // pwd=""
  // amount=""

  // acno1=""
  // pwd1=""
  // amount1=""

  user:any
  lDate:any
  acno:any

   //deposit group model creation
   depositForm=this.fb.group({
    //creating form array
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

   //withdraw group model creation
   withdrawForm=this.fb.group({
    //creating form array
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    if(localStorage.getItem('currentUname')){
      this.user = JSON.parse(localStorage.getItem('currentUname') || '')

    }
    this.lDate = new Date() 
   }

  ngOnInit(): void {
    //  if (!localStorage.getItem ("currentAcno")){
    //   alert("Please Log In")
    //   this.router.navigateByUrl("")
    // }
    
    }
    
  

  deposit(){
    // alert("Deposit success")

    var acno=this.depositForm.value.acno
    var pwd=this.depositForm.value.pwd
    var amount=this.depositForm.value.amount

    if(this.depositForm.valid){
      //calling deposit function of dataService - asynchronous
    this.ds.deposit(acno,pwd,amount)
.subscribe((result:any)=>{
if(result){
  alert(result.message)
}
},
(result)=>{
  alert(result.error.message)
}
)
  
    
  // else{
  //   alert("Invalid Form")
  // }
  }
    }


  withdraw(){
    // alert("Withdraw success")

    var acno=this.withdrawForm.value.acno1
    var pwd=this.withdrawForm.value.pwd1
    var amount=this.withdrawForm.value.amount1

    if(this.withdrawForm.valid){

      //calling withdraw function of dataService - asynchronous
    this.ds.withdraw(acno,pwd,amount)

    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
  }

  // else{
  //   alert("Invalid Form")
  // }
    }
  
    logout(){
      localStorage.removeItem("currentAcno")
      localStorage.removeItem("currentUname")
      localStorage.removeItem("token")

      this.router.navigateByUrl("")
    }

  

    deleteMyAccount(){
      this.acno = JSON.parse(localStorage.getItem("currentAcno") || '')
    }

    cancel(){
      this.acno=""
    }
    delete(event:any){
      // alert("Delete account " + event +" from parent")
      //asynchronous
       this.ds.delete(event)
       .subscribe((result:any)=>{
         if(result){
          alert(result.message)

          localStorage.removeItem("currentAcno")
          localStorage.removeItem("currentUname")
          localStorage.removeItem("token")
           this.router.navigateByUrl("")

         }
       },
       (result)=>{
         alert(result.error.message)
       }
       )
    }
    
}
