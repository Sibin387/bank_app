import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  clickCount=0;
  accountDetails:any={};
  constructor(private dataService: DataService) {
    this.accountDetails = dataService.getAccountDetails();
  }

  ngOnInit(): void {
  }
  onHeaderClick(e){
    console.log(e);
    this.clickCount++;
  }

  onSave(){
    this.dataService.saveAccountDetails(this.accountDetails);
  }
}