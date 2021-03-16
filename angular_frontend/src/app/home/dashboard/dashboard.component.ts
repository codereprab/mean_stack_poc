import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

export class TransactionData {
  constructor(
    public date: Date,
    public desc: string,
    public amount: number
  ) {}
}

export class Customer {
  constructor(
    public id: string,
    public name: string,
    public last_login: Date,
    public balance: number,
    public transaction: TransactionData []
  ) {}
}

export class UserDetails {
  constructor(
    public success: string,
    public customer: Customer
  ) {}
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  smsalertOption: boolean = false;
  newsletterOption: boolean = false;
  flyerOption: boolean = false;
  twowaytest: string = '';

  userDetails: UserDetails;

  error: boolean = false;
  errorText: string = '';

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.userDetails = new UserDetails("true",
                                      new Customer("IJ101", "Dummy", new Date(), 0, null));

    this.dashboardService.retrieveUserDetails().subscribe(
      response => {
        this.userDetails = response;
      },
      error => {
        this.error = true;
        this.errorText = "Unknown Error!";
        this.userDetails = null;
      }
    )
  }

  echoInput() : void {
    alert('SMS Alert=' + this.smsalertOption.valueOf() + '\n' +
          'Marketing Newsletter=' + this.newsletterOption.valueOf() + '\n' +
          'Flyers=' + this.flyerOption.valueOf() + '\n' +
          'Entered Text=' + this.twowaytest.valueOf()
    );
  }
}
