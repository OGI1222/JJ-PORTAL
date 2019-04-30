import { Component, OnInit } from '@angular/core';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';

import { Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit() {
    var top = document.documentElement.scrollTop || document.body.scrollTop
  }

  private ofset: number = 60;
  private startPos: number = 0;
  private headerPos: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let currentPos = this.document.body.scrollTop;
    if(currentPos > this.startPos) {
      if(this.document.body.scrollTop >= this.ofset) {
        this.headerPos = -this.ofset;
      }
    } else {
      this.headerPos = 0;
    }
    this.startPos = currentPos;
  }

}
