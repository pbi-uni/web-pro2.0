import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user/user.service';
import { LoginUser } from '../user/Model/LoginUser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  Login(form:NgForm)
  {
    console.log(form.value.email);
    console.log(form.value.password);
    var user:LoginUser={
      email:form.value.email,
      password:form.value.password
    }
    this.userservice.LoginUser(user);
  }
}
