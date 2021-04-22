import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService,private modalService: NgbModal,  private router: Router,) { }
  showToast(data){
   debugger;
        if (data.Status === 200) {
          this.toastr.success(data.Message, 'Success Message', {
            timeOut: 5000,
          });
          //this.router.navigate(['/login']);
          this.modalService.dismissAll();
        } else {
          this.toastr.error(data.Message, 'Registration Error', {
            timeOut: 5000,
          });
        }

  }

//   scheduleToast(data){
//         if (data.httpStatus === 200) {
//           this.toastr.success(data.message, 'Success Message', {
//             timeOut: 5000,
//           });
//           this.router.navigate(['meetingevents']);

//         } else {
//           this.toastr.error(data.message, 'Schedule Meeting', {
//             timeOut: 5000,
//           });
//         }
//        }
       
  }
//   showSuccess(message, title){
//       this.toastr.success(message, title)
//   }
