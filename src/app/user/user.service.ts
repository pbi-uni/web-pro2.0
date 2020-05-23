import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from './Model/userregister';
import { Router } from '@angular/router';
import { LoginUser } from './Model/LoginUser';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  server="https://localhost:4040/"
  toke
// toke:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWM4MzM2MjRlZGQ2YjI0OGNmZjhmNDAiLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MDE4MjQ0MywiZXhwIjoxNTkwMjAwNDQzfQ.AQKWh70bDwjPAYfwIs9FeuZPxMx14dyntzREahrSIK0"
  constructor(private http:HttpClient,private router:Router) { }

GetUser()
{
  this.http.get(this.server+'api/user/me',{

    headers: { 'x-auth-token': this.toke}
}).subscribe(
  succ=>{
    console.log(succ);
    return succ;
 },
  err=>{console.log(err);
    alert(err.error);}
)
}

  RegisterUser(user:UserRegister)
  {
   this.http.post(this.server+'api/user/signUp',user).subscribe(
     succ=>{

       console.log(succ);
      // this.GetUser();
this.router.navigate(['/homepage'])
    
    },
     err=>{console.log(err);
   alert(err.error);
   
    }
   );
   
  }

  LoginUser(user:LoginUser)
  {
    
    this.http.post<any>(this.server+'api/user/logIn',user).subscribe(
      succ=>{
  this.toke = succ.token
        console.log(succ);
        console.log(this.toke)
       // this.GetUser();
 this.router.navigate(['/homepage'])
     
     },
      err=>{console.log(err);
        alert(err.error);}
    );
  }
  
}
