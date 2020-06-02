import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  page="history";
  accountDetails:any = {};
  constructor(private dataService: DataService) {
    this.accountDetails = dataService.getAccountDetails();
    console.log(this.accountDetails);
  }

  ngOnInit(): void {
    
  }

}
