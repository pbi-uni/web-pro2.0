import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { UserService } from '../user/user.service';
import { UserRegister } from '../user/Model/userregister';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
user:UserRegister;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  Registeruser(form:NgForm)
  {
//console.log(form)
this.user={
 firstName:form.value.firstname,
 lastName:form.value.lastname,
 email:form.value.email,
 password:form.value.password,
 userName:form.value.name,
 dob:form.value.dob,
 mobileNo:form.value.mobilenumber
}
this.userservice.RegisterUser(this.user);
  }
}
