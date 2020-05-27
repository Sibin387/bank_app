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
  constructor() { }
  showSuccess(){
    alert("Success from service")
  }
}