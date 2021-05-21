import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DiagnosticCategory } from 'typescript';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  @ViewChild('scroller1') scroller: ElementRef;
  prodetails : any;
  cat_Id: any;
  images:any;
  subpdts:any;
  PRIMARY_IMAGE:any;
  productimagelist:any= [];
  constructor(private userService: UserService, private router: Router, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.cat_Id = this._Activatedroute.snapshot.params['card.PRODUCT_ID'];
    console.log(this.cat_Id);
    this.getProductList();
    const div = this.scroller.nativeElement as HTMLDivElement;
    div.addEventListener('mouseover', e => {
      console.log('Mouse Over');
    });
    div.addEventListener('mouseout', e => {
      console.log('Mouse Out');
    });
  }
  getProductList() {
    debugger;
   
    this.userService.getProductList(this.cat_Id).subscribe(
      
      (data: any) => {
        if (data) {
          //this.rowData = data.data;
          console.log(data);
          this.prodetails=data;
          this.PRIMARY_IMAGE=this.prodetails.PRIMARY_IMAGE;

         // this.subpdts=this.prodetails.subproduct;
        }
        
      });
      // for(let i=0;i<this.prodetails.subproduct.length;i++){
      //   this.productimagelist.push({
      //     imageURL:this.prodetails.subproduct.url,
      
      //   });
      //   for(let i=0;i<this.prodetails.picture.length;i++){
      //     this.productimagelist.push({
      //       imageURL:this.prodetails.subproduct.pic,
        
      //     });
      //   }
      // }
      //console.log(this.productimagelist);
  }
  
//merge objects




  mouseEnter(event){
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.src;
    var value = idAttr.nodeValue;
    console.log(value)
    this.PRIMARY_IMAGE = value ; //I have binded thisvariable in HTML
  }

  mouseLeave(ev){
    //reset this.imageURL if needed
  }

}
