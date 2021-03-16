import { Component, OnInit, Renderer2 } from '@angular/core';
import { TeamService } from './team.service';

export class TeamMember {
  constructor(
    public id: string,
    public personName: string
  ) {}
}

export class Team {
  constructor(
    public teammembers: TeamMember[]
  ) {}
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  intervalId: any;
  team: Team;

  constructor(
    private renderer: Renderer2,
    private teamService: TeamService) { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.changeColor();
    }, 1000);

    this.teamService.retrieveTeamDetails().subscribe(
      response => {
        console.log(response);
        this.team = response;
        console.log(this.team);
      },
      error => {
        console.log("error occurred while calling team service");
      }
    )

  }

  changeColor(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    let element = this.renderer.selectRootElement("#divChangingColor", true);
    this.renderer.setStyle(element, 'backgroundColor' , bgColor);
  }

}
