import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from './dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  retrieveUserDetails() {
    return this.http.post<UserDetails>("http://localhost:3000/api/retrieveUserDetails", null);
  }
}
