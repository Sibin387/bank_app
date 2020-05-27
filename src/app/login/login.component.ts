import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    accno : ['hsnAc1001', Validators.required],
    mpin : ['1001', Validators.minLength(3)]
  })

  error:string="";
  constructor(private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onAccountNumberChange(e){
    //this.accno=e.target.value;
  }

  onMPinChange(e){
    //this.mpin=e.target.value;
  }

  login(){
    console.log(this.loginForm.get("mpin").errors)
    this.error="";
    if(this.loginForm.get("mpin").errors){
      this.error="You have error in mpin";
    }
    if(this.loginForm.get("accno").errors){
      this.error="You have error in accno";
    }
    // if(this.loginForm.valid){
    //   this.error="";
    // }else{
    //   this.error="You have error";
    // }
    // const accno = this.loginForm.value.accno;
    // const mpin = this.loginForm.value.mpin;
    // //localStorage.setItem("myAccNo", this.accno.value);
    // // document.querySelector("#accno").value="";
    // // document.querySelector("#acmpin").value="";

    // if(accno in this.ds.accountDetails)
    // {
    //   const pin = this.ds.accountDetails[accno]["mpin"];
    //   if(pin == mpin) 
    //   {
    //     alert("success")
    //       // swal(`Welcome ${Data.accountDetails[accno]["name"]}`, "Successfull Login", "success")
    //       // .then((value) => {
    //       // window.location.href="/home/neethi/Desktop/Mean_Stack/Assignment/Bank/bankTrans.html";
    //       // });
    //   }
    //   else{
    //     alert("Error")
    //       // swal("Login Failed!!!", "Invalid Mpin");
    //   } 
    // }
    // else{
    //   alert("Invalid username")
    //     //swal("Login Failed!!!", "Inavlid Username ");
    // }
  }
}