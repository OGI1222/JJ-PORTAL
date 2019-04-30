import { Component, OnInit } from '@angular/core';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      location.href="/";
    }, 3000);
  }
}
