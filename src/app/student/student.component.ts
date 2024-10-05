import { Component, ElementRef, inject, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { StudentServiceService } from '../student-service.service';
import Swal from 'sweetalert2';
import {  productService } from '../productService';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 public modalRef!: BsModalRef;
 fakeData?: any[];
//  data!: Item[];
 usersList: any = [];
 productList: any = [];
 buttonSubmit:boolean=false;
 listRole=[{id:1,name:"admin"},{id:2,name:"customer"}];
 formData: any = {
  name: '',
  email: '',
  password: '',
  role:'',
  avatar: ''
};
 heading = '';
  btnStatus = '';
  userIdtoEdit: any;

_service = inject(StudentServiceService);

  constructor (public service:StudentServiceService, private modalService: BsModalService,private el:ElementRef,_productService :productService){
    // this.data = _productService.getItems();
  } 
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllUsers();

    }
    
  getAllProducts() {
    this._service.getAllProducts().subscribe({
      next: (response) => {
        console.log(response)
        this.productList = response
      },
      error: (err) => console.error(err)
    })
  }
  openModal(template: TemplateRef<void>, rowId = 0, value: any, heading: any) {
    this.userIdtoEdit = rowId
    this.modalRef = this.modalService.show(template);
    if (value == 'Add') {
      this.formData = {}
      this.btnStatus = value
      this.heading = heading
    }
    else {
      this.btnStatus = value
      this.heading = heading
      this._service.getSingleUser(rowId).subscribe((response:any)=>{
          this.formData = {
            name: response.name,
            email: response.email,
            password: response.password,
            role:response.role,
            avatar: response.avatar
          };
       
      });
    }
    }
    submitForm(form: any) {
      debugger;
      this. buttonSubmit=true;
      if(!form.invalid){
      if (this.btnStatus == 'Add') {
        this._service.createUser(this.formData).subscribe((response:any)=>{
          Swal.fire({ position: 'center', icon: 'success', title: 'Data Saved successfully', showConfirmButton: false, timer: 1500 })
            this.getAllUsers();
        });
      }
      else {
        this.updateSingleUser()
      }
    }
    }
    updateSingleUser() {
      this._service.updateSingleUser(this.userIdtoEdit, this.formData).subscribe((response:any)=>{
          this.modalRef?.hide();
          Swal.fire({ position: 'center', icon: 'success', title: 'Data Edit successfully', showConfirmButton: false, timer: 1500 })
          this.getAllUsers();
      });
    }
    getAllUsers() {
      return this._service.getAllUsers().subscribe((response:any)=>{
        console.log(response);
          this.usersList = response;
      });
    }
    deleteProduct(id: any) {
      this.productList = this.productList.filter((product: any) => product.id !== id);
      this._service.deleteProduct(id).subscribe({
        next: (response) => {
          console.log(response)
          if (response) {
            this.productList
          }
        },
        error: (err) => console.error(err)
      })
    }
    delteUser(id: any) {
      debugger
      this.usersList = this.usersList.filter((user: any) => user.id !== id);
      this._service.deleteUser(id).subscribe((response:any)=>{
          if (response) {
          Swal.fire({ position: 'center', icon: 'success', title: 'Data Deleted successfully', showConfirmButton: false, timer: 2000 })
            this.usersList;
          }
      })
    }
    setFocusValidationError() {
    // const invalidControl = this.el.nativeElement.querySelector('form .ng-invalid')
    // // console.log(invalidControl);
    // if (invalidControl) {
    //   invalidControl.focus();
    // }
     // Mark all fields as touched to trigger validation messages
     
  }
  dataSource3 = [
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' },
  // ... more options
];

selectedValue = [];

onValueChanged(event: any) {
  console.log('Selected value:', event);
}
   data = ['Option 1', 'Option 2', 'Option 3'];
  //    options = {
  //      width: '100%',
  //      placeholder: 'Select an option'
  //    };
   
  //    onValueChanged(value: any) {
  //      console.log('Selected value: ', value);
  //    }
  }

 
  


