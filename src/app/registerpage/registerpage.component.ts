import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';
import { NgbModule, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../_services/notification.service';
import { ConfirmedValidator  } from '../confirmed.validator';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  RegForm: FormGroup;
  registerSubmit = false;
  maxDate: any = this.ngbCalendar.getToday();
  constructor(private formBuilder: FormBuilder, private notifyService : NotificationService, private modalService: NgbModal, private toastr: ToastrService,private ngbCalendar: NgbCalendar, private userService: UserService) {
    this.RegForm = this.formBuilder.group({
      Userid: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      ConfirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      Name: [null, [Validators.required]],
      MobileNo: [null, [Validators.required]], // , [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)],
      DOB:[null, [Validators.required]],
    },{
      validator: ConfirmedValidator('Password', 'ConfirmPassword')
    });
   }

  ngOnInit(): void {

  }

  get f() { return this.RegForm.controls; }

  onSubmit() {
    this.registerSubmit = true;
    if (this.RegForm.invalid) {
      return;
    }
    console.log(this.RegForm.value);
    debugger;
   
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
        this.notifyService.showToast(data);
      }, error => {

        
      });

  }

  

}
