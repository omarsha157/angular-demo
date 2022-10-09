import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  info:any
  data:any

  constructor() { }

  ngOnInit(): void {
  }

  process() {
    this.data = this.info
  }

}
