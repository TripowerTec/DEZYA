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
  slides:any= [ [] ];
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
          this.slides = this.chunk(this.allprdts, 3);
         // this.catId = data.id;
         
        }
      }, error => {
        
      });
  }


 

chunk(arr, chunkSize) {

let R= [];

for (let i=0, len=arr.length; i<len; i+=chunkSize) {

R.push(arr.slice(i, i+chunkSize));

}

return R;

}
 
  

}
