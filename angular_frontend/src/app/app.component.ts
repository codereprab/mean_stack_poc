import { Component, OnInit } from '@angular/core';

declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'my-poc';

  ngOnInit(){

  }
}
