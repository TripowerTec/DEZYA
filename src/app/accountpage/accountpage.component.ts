import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../_services/notification.service';
import { ConfirmedValidator  } from '../confirmed.validator';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  resetPasswordForm: FormGroup;
  loginSubmit = false;
  submitForgetPwd =false;
  resetPwd = false;
  constructor(private formBuilder: FormBuilder, private notifyService : NotificationService, private modalService: NgbModal, private toastr: ToastrService, private userService: UserService) { 
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.forgotPasswordForm = this.formBuilder.group({
      Email: ['', [Validators.required,Validators.email]]
    });
    this.resetPasswordForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      OTP: ['', [Validators.required]],
    },
    {validator: ConfirmedValidator('Password', 'ConfirmPassword')
    });
  }

  ngOnInit(): void {

   }

   get f() { return this.loginForm.controls; }

   onSubmit() {
     debugger;
     this.loginSubmit = true;
    
     if (this.loginForm.invalid) {
       return;
     }
     
     const loginDetail = {
       "userid": this.loginForm.value.Email,
       "password": this.loginForm.value.Password,
     }
     console.log(this.loginForm.value);
     this.userService.logdetails(loginDetail).subscribe(
       
       (data: any) => {
        
        this.notifyService.showToast(data);
         
       }, error => {
 
       });
   
  }
   open(content) {
    this.modalService.open(content);
  }

  get fp() { return this.forgotPasswordForm.controls; }

  onForgotSubmit(otpMethod) {
    debugger;
    this.submitForgetPwd = true;
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    
    const forgotpwdDetail = {
      "userid": this.forgotPasswordForm.value.Email,
    }
    this.userService.forgotPassword(forgotpwdDetail).subscribe(
      
        (data: any) => {
        this.notifyService.showToast(data);
        this.modalService.open(otpMethod);
          
        }, error => {
                  
        });
  
}
  //OTP submit
  get s() { return this.resetPasswordForm.controls; }
  onotpSubmit() {
    this.resetPwd = true;
    if (this.resetPasswordForm.invalid) {
      return;
    }
     const otpDetail = {
       "userid": this.resetPasswordForm.value.Email,
       "password": this.resetPasswordForm.value.Password,
       "otp": this.resetPasswordForm.value.OTP,
   
     }
     this.userService.resetPassword(otpDetail)
       .subscribe(
         (data: any) => {
          this.notifyService.showToast(data);
             this.modalService.dismissAll();
          
         }, error => {
           // this.alertService.error(error);         
         });
   }
}
