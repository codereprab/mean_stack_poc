import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mainnavigation',
  templateUrl: './mainnavigation.component.html',
  styleUrls: ['./mainnavigation.component.sass']
})
export class MainnavigationComponent implements OnInit {

  @Input() pageName: string;

  constructor() { }

  ngOnInit(): void {
    //console.log("hello " + this.pageName);
  }

}
