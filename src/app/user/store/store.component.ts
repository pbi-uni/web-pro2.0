import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit,OnDestroy {
  @Input() storename:string;
  @Input() index:number;
  rating:number=4;
  show:boolean=false;
  subscription:Subscription;
  constructor(private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
  this.subscription= this.activateroute.params.subscribe(
     (param:Params)=>{
       this.index=+param['id'];
      
       if(this.index==0)
       {
        this.storename='General store';
        this.show=true;
       }
       else if(this.index==1)
       {
         this.storename='Medicine store'; 
         this.show=true;     
       }
       else if(this.index==2)
       {
         this.storename='Cosmetic store';
         this.show=true;
       }
        else if(this.index==3)
        {
          this.storename='Dairy store';
          this.show=true;
        }  
       else if(this.index==4)
       {
         this.storename='Stationary store';
         this.show=true;
       }
       else{

       }
     }
   )
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }
  showall()
  {
this.show=!this.show;
  }
}
