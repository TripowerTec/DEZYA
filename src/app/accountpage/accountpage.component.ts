import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private toastr: ToastrService, private userService: UserService) { 
    this.loginForm = this.formBuilder.group({
      Email: [null, Validators.required],
      
      Password: [null, [Validators.required]],
     
    });
    this.forgotPasswordForm = this.formBuilder.group({
      Email: ['', Validators.required]
    });
  }

  ngOnInit(): void {

   }

   get f() { return this.loginForm.controls; }

   onSubmit() {
     debugger;
     // this.contactSubmit = true;
     // if (this.contactForm.invalid) {
     //   return;
     // }
     const loginDetail = {
       "userid": this.loginForm.value.Email,
       "password": this.loginForm.value.Password,
    
       
     
     }
     console.log(this.loginForm.value);
     this.userService.logdetails(loginDetail).subscribe(
       
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
 
   open(content) {
    this.modalService.open(content);
  }
  //get forgotFrom() { return this.forgotPasswordForm.controls; }

  onForgotSubmit() {
   // this.submitForgetPwd = true;
    // if (this.forgotPasswordForm.invalid) {
    //   return;
    // }
    const forgotpwdDetail = {
      "userid": this.loginForm.value.Email,
      //"password": this.loginForm.value.Password,
   
      
    
    }
    this.userService.forgotPassword(forgotpwdDetail)
      .subscribe(
        (data: any) => {
          if (data.httpStatus === 200) {
            this.toastr.success(data.message, 'Forgot Password', {
              timeOut: 3000,
            });
            this.modalService.dismissAll();
          } else {
            this.toastr.error(data.message, 'Forgot Password', {
              timeOut: 3000,
            });

          }
        }, error => {
          // this.alertService.error(error);         
        });
  }
}
