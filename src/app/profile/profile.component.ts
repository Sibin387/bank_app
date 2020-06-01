import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  clickCount=0;
  constructor() { }

  ngOnInit(): void {
  }
  onHeaderClick(e){
    console.log(e);
    this.clickCount++;
  }
}
