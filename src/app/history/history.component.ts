import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  page="history";
  items = [
    'name1',
    'name2',
    'name3',
    'name4',
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

}
