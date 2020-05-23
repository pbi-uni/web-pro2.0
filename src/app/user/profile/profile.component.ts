import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserRegister } from '../Model/userregister';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor(private userservice:UserService) { 
    
  }

  ngOnInit(): void {
    const user=this.userservice.GetUser()
  }
  
}
