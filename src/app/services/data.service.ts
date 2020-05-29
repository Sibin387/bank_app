import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {
    hsnAc1001: { name: "User1", mpin: 1001, balance: 10000 },
    hsnAc1002: { name: "User2", mpin: 1002, balance: 20000 },
    hsnAc1003: { name: "User3", mpin: 1003, balance: 15000 },
    hsnAc1004: { name: "User4", mpin: 1004, balance: 35000 },
    hsnAc1005: { name: "User5", mpin: 1005, balance: 12000 }
  }
  constructor() {
    const accountDetails = localStorage.getItem('accountDetails');
    const data = JSON.parse(accountDetails);
    if(data){
      this.accountDetails = data;
    }
  }
  showSuccess(){
    alert("Success from service")
  }
  register(data){
    this.accountDetails[data.accno]={
      name: `${data.firstName} ${data.lastName}`,
      mpin: data.mpin,
      balance: 0,
    };
    localStorage.setItem('accountDetails', JSON.stringify(this.accountDetails));
  }
  login(accno, mpin){
    if(accno in this.accountDetails)
    {
      const pin = this.accountDetails[accno]["mpin"];
      if(pin == mpin) 
      {
        return true;
      }
      else{
        return false;
      } 
    }
    return false;
  }
}