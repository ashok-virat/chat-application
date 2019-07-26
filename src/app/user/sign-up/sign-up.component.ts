import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any='MjQyZGUxMThjYTIzYTFhODc4NmVkNzQ0ZDI2ZWNkODE4Y2RiNTcxNDdlMjdlNTJkNDE1ZTUxMDM1OGQ2NTI1ZGI5MmYwZWEzOWYxYzI5YmMwOGJlMGMzZWY1NzAxYTk1MzdlZDQ1ZDM0ZTY4ZTliZjUxMGNmY2E4ZjRiMTkyN2RkOQ==';


  constructor(  
    public appService: AppService,
    public router: Router,
    private toastr: ToastrService,) {

     }

  ngOnInit() {
  }

  public goToSignIn: any = () => {

    this.router.navigate(['/login']);

  } // end goToSignIn

  public signupFunction: any = () => {

    if (!this.firstName) {
      this.toastr.warning('enter first name')
     

    } else if (!this.lastName) {
      this.toastr.warning('enter last name')

    } else if (!this.mobile) {
      this.toastr.warning('enter mobile')

    } else if (!this.email) {
      this.toastr.warning('enter email')

    } else if (!this.password) {
      this.toastr.warning('enter password')
     

    } else if (!this.apiKey) {
      this.toastr.warning('Enter your API key')

    } else {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        password: this.password,
        apiKey: this.apiKey
      }

      console.log(data);

      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {

            this.toastr.success('Signup successful');

            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {

            this.toastr.error(apiResponse.message);

          }

        }, (err) => {

          this.toastr.error('some error occured');

        });

    } // end condition

  } // end signupFunction

}
