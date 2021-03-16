import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './team.component';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  retrieveTeamDetails() {
    return this.http.post<Team>("http://localhost:3000/api/retrieveTeamDetails", null);
  }
}
