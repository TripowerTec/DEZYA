import { Component, OnInit } from '@angular/core';
import { DiagnosticCategory } from 'typescript';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  prodetails : any;
  cat_Id: any;
  images:any;
  subpdts:any;
  url:any;
  product:any;
  constructor(private userService: UserService, private router: Router, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.cat_Id = this._Activatedroute.snapshot.params['item.id'];
    console.log(this.cat_Id);
    this.getProductList();
  }
  getProductList() {
    debugger;
   // const currentCatId: any = JSON.parse(sessionStorage.getItem('id'));
    // const catDetails = {
    //   "id": this.cat_Id
    // };
    this.userService.getProductList(this.cat_Id).subscribe(
      
      (data: any) => {
        if (data) {
          //this.rowData = data.data;
          console.log(data);
          this.prodetails=data;
          this.product=this.prodetails.subproduct;
          console.log(this.product.url);
          this.url=this.product.url;
          //this.images=this.prodetails;
         
        }
      }, error => {
        // this.loading = false;
      });
  }

  mouseEnter(event){
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.src;
    var value = idAttr.nodeValue;
    console.log(value)
    this.url = value ; //I have binded thisvariable in HTML
  }

  mouseLeave(ev){
    //reset this.imageURL if needed
  }

}
