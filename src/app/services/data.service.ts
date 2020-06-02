import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {
    hsnAc1001: { name: "User1", mpin: 1001, balance: 10000, history:[] },
    hsnAc1002: { name: "User2", mpin: 1002, balance: 20000, history:[] },
    hsnAc1003: { name: "User3", mpin: 1003, balance: 15000, history:[] },
    hsnAc1004: { name: "User4", mpin: 1004, balance: 35000, history:[] },
    hsnAc1005: { name: "User5", mpin: 1005, balance: 12000, history:[] }
  }
  loggedInUser = null;
  constructor() {
    const accountDetails = localStorage.getItem('accountDetails');
    const data = JSON.parse(accountDetails);
    if(data){
      this.accountDetails = data;
    }
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loggedInUserData = JSON.parse(loggedInUser);
    if(loggedInUserData){
      this.loggedInUser = loggedInUserData;
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
        this.loggedInUser = this.accountDetails[accno];
        this.saveUserData();
        localStorage.setItem('accno',accno);
        return true;
      }
      else{
        return false;
      } 
    }
    return false;
  }

  saveUserData(){
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
    localStorage.setItem('accountDetails', JSON.stringify(this.accountDetails));
  }

  logout(){
    localStorage.removeItem('accountDetails');
    localStorage.removeItem('accno');
  }

  deposit(amount, mpin){
    if(this.loggedInUser.mpin!=mpin){
      alert("Invalid mpin");
      return false;
    }
    this.loggedInUser.balance= parseFloat(this.loggedInUser.balance)+parseFloat(amount);
    const accno = localStorage.getItem('accno');
    this.accountDetails[accno].balance=this.loggedInUser.balance;
    if(!this.accountDetails[accno].history){
      this.accountDetails[accno].history=[];
    }
    this.accountDetails[accno].history.push({ amount:amount, type:'credit', date: new Date()});
    console.log(this.accountDetails[accno]);
    this.saveUserData();
    alert("Amount added successfully");
  }

  withdraw(amount, mpin){
    if(this.loggedInUser.mpin!=mpin){
      alert("Invalid mpin");
      return false;
    }
    if(this.loggedInUser.balance<amount){
      alert("Insufficient balance");
      return false;
    }
    this.loggedInUser.balance= parseFloat(this.loggedInUser.balance) -parseFloat(amount);
    const accno = localStorage.getItem('accno');
    this.accountDetails[accno].balance=this.loggedInUser.balance;
    if(!this.accountDetails[accno].history){
      this.accountDetails[accno].history=[];
    }
    this.accountDetails[accno].history.push({ amount:amount, type:'debit', date: new Date()});
    console.log(this.accountDetails[accno]);
    this.saveUserData();
    alert("Amount withdrawn successfully");
  }
}