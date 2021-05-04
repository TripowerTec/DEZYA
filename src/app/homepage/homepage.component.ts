import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  allprdts : any;
  imageURL:string ;
  constructor(private userService: UserService) { 
     
  }

  ngOnInit(): void {
    debugger;
    this.getHomeProductList();
  }

  getHomeProductList() {
    debugger;
    
    this.userService.getHomeProductList().subscribe(
      
      (data: any) => {
        if (data) {
          //this.rowData = data.data;
          console.log(data);
          this.allprdts=data;
         // this.catId = data.id;
         
        }
      }, error => {
        
      });
  }


}
