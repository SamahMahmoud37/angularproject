import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public route:Router){}
  loginobj={
    username:'',
    pasword:''
  }
  onSubmit(form:NgForm){
  debugger;
   if(this.loginobj.username=='samah' && this.loginobj.pasword=='123'){
    debugger;
    //window.location.href='localhost:4200/student';
    this.route.navigate(['/student']);

   }
   else{
    Swal.fire('Error login!');
   }
}

}
