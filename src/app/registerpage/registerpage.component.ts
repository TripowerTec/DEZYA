import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';
import { NgbModule, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  RegForm: FormGroup;
  maxDate: any = this.ngbCalendar.getToday();
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,private ngbCalendar: NgbCalendar, private userService: UserService) {
    this.RegForm = this.formBuilder.group({
      Userid: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required, Validators.minLength(6)]],
      Name: [null],
      MobileNo: [null ], // , [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)],
      DOB:[null]
    });
   }

  ngOnInit(): void {

  }

  get f() { return this.RegForm.controls; }

  onSubmit() {
    debugger;
    // this.contactSubmit = true;
    // if (this.contactForm.invalid) {
    //   return;
    // }
    const contactDetail = {
      "userid": this.RegForm.value.Userid,
      "password": this.RegForm.value.Password,
      "name": this.RegForm.value.Name,
      "mobile_no": this.RegForm.value.MobileNo,
      "dob":this.RegForm.value.DOB,
      
    
    }
    console.log(this.RegForm.value);
    this.userService.regdetails(contactDetail).subscribe(
      
      (data: any) => {
        //this.notifyService.contactToast(data);

        
        debugger;
        if (data.httpStatus === 200) {
          this.toastr.success(data.message, 'Success Message', {
            timeOut: 5000,
          });
          //this.router.navigate(['/login']);
         // this.modalService.dismissAll();
        } else {
          this.toastr.error(data.message, 'Registration Error', {
            timeOut: 5000,
          });
        }
        
      }, error => {

        // this.loading = false;
      });

  }

  

}
