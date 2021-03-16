import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.sass']
})
export class ReusableComponent implements OnInit {

  @Input() componentId: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleColor(){
    let element = this.renderer.selectRootElement("#"+this.componentId, true);
    if (element.classList.contains("red")){
      this.renderer.removeClass(element, "red");
    } else {
      this.renderer.addClass(element, "red");
    }
  }
}
