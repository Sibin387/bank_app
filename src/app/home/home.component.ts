import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page="home"
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  checkBalance(){
    alert(this.dataService.loggedInUser.balance);
  }
  deposit(amount, mpin){
    this.dataService.deposit(amount, mpin);
  }
  withdraw(amount, mpin){
    this.dataService.withdraw(amount, mpin);
  }
}
