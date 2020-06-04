import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  page="history";
  accountDetails:any = {};
  constructor(private dataService: DataService, private router:Router) {
    this.accountDetails = dataService.getAccountDetails();
    console.log(this.accountDetails);
  }

  ngOnInit(): void {
    
  }

  edit(id){
    this.router.navigate(['/edit-history',id]);
  }
}
