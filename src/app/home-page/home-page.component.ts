import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  coverImage = 'https://d3uf2ssic990td.cloudfront.net/images/5031/413b4a3e-5bf8-494b-bfda-ed9488ca3b0d/kids.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
