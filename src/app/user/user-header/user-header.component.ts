import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  sidebarShow=false;
  constructor() { }

  ngOnInit(): void {
  }

   openNav() {
     if(this.sidebarShow){
       document.getElementById("mySidebar").style.width = "0";
       this.sidebarShow=!this.sidebarShow;
     }
    
   // document.getElementById("main").style.marginLeft = "0px";
   else{
     document.getElementById("mySidebar").style.width = "250px";
     this.sidebarShow=!this.sidebarShow;
   }
   
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    this.sidebarShow=!this.sidebarShow;
   // document.getElementById("main").style.marginLeft = "0";
  }
}
