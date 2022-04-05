import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno:any
  currentUname:any
  database:any={
    1000:{acno:1000,uname:"Neer",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"Vyom",password:1001,balance:5000,transaction:[]},
    1002:{acno:1002,uname:"Laisha",password:1002,balance:5000,transaction:[]}
  }

  constructor(private http: HttpClient) { 
    // this.getData()
  }

  //to store data in localstorage
  storeData(){
    localStorage.setItem("databaseNew",JSON.stringify(this.database))
   
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
      if(this.currentUname){
        localStorage.setItem("currentUname",JSON.stringify(this.currentUname))
      }
    
  }
 // to get data from localstorage
  getData(){

    if(localStorage.getItem("databaseNew")){
      this.database = JSON.parse(localStorage.getItem("databaseNew") || '')
    }

    if(localStorage.getItem("currentAcno")){
      this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || '')
    }

    if(localStorage.getItem("currentUname")){
      this.currentUname = JSON.parse(localStorage.getItem("currentUname") || '')
    }
  }
//register
  register(acno:any,password:any,uname:any){
   // json data
    const data = {
      acno,password,uname
    }
   //register API
    return this.http.post('http://localhost:3000/register',data)

  // let database=this.database

  // if(acno in database){
  //   return false
  // }
  // else{

  //   database[acno]={
  //     acno,
  //     uname,
  //     password,
  //     balance:0,
  //     transaction:[]
  //   }
  //   console.log(database);
  //   this.storeData()
  //   return true
  // }
  }

  //login
  login(acno:any,password:any){

    //req body
    const data = {
      acno,password
    }
    //login API
    return this.http.post('http://localhost:3000/login',data)

    // let database = this.database
    // if(acno in database){
    //   if(password == database[acno]["password"]){
    //     this.currentAcno = acno

    //     this.currentUname=database[acno]["uname"]
    //   return true
    //   }
    //   else{
    //     alert("Incorrect Password")
    //     return false
    //   }
    // }
    // else{
    //   alert("User does not exist")
    //   return false
    // }
  }

  //deposit

  deposit(acno:any,password:any,amt:any){

    //req body
    const data = {
      acno,password,amt
    }


    //deposit API
    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())

    
    // var amount = parseInt(amt)

    // let database=this.database

    // if(acno in database){
     
    //   if(password == database[acno]["password"]){
         
    //     database[acno]["balance"]+=amount
        
    //     database[acno]["transaction"].push({

    //       amount:amount,
    //       type:"credit"
    //     })
    //     console.log(database);
    //     this.storeData()
    //      return database[acno]["balance"]
    //   }
    //   else{
    //     alert("Incorrect Password")
    //     return false
    //   }
    // }
    

    // else{
    //   alert("User does not exist")
    //   return false
    // }
  }

  // to add token in request header
  getOptions(){
// token fetch
const token = JSON.parse(localStorage.getItem('token') || '')

// to create req header
let headers = new HttpHeaders()
if(token){
  headers = headers.append('x-access-token',token)
  options.headers = headers
} 
return options
  }
//withdraw

withdraw(acno:any,password:any,amt:any){

  //req body
  const data = {
    acno,password,amt
  }

  //withdraw API
  return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())

    
  // var amount = parseInt(amt)

  // let database=this.database

  // if(acno in database){
   
  //   if(password == database[acno]["password"]){

  //     if(database[acno]["balance"]>amount){

  //      database[acno]["balance"]-=amount

  //      database[acno]["transaction"].push({

  //       amount:amount,
  //       type:"debit"
  //     })
  //     console.log(database);
  //     this.storeData()

  //      return database[acno]["balance"]
  //   }
  //   else{
  //     alert("Insufficient Balance")
  //     return false
  //   }
  //   }
  //   else{
  //     alert("Incorrect Password")
  //     return false
  //   }
  // }
  

  // else{
  //   alert("User does not exist")
  //   return false
  // }
}

//transaction

getTransaction(acno:any){


  //req body
  const data = {
    acno
  }

  //transaction API
  return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
  // return this.database[acno]["transaction"]

}

//delete Account
delete(acno:any){
   //deleteAccount API
   return this.http.delete('http://localhost:3000/deleteAccount/'+acno,this.getOptions())
}

}
