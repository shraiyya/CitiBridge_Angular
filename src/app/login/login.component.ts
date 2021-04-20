import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";
  hasError: boolean = false;

  constructor(
    // private loginService: LoginService, 
    private messageService: MessageService,
    private myRoute: Router) { }

  ngOnInit(): void {
  }
  login() {
    if (this.userName.length == 0 || this.password.length == 0) {
      this.hasError = true;
      return;
    } else {
      this.hasError = false;
      sessionStorage.setItem("isLoggedIn","true");
      this.myRoute.navigate(["/dashboard"]);
    }
  }
  //   let temp:UserMaster = { userId: this.userName, password: btoa(this.password.split('').reverse().join('')) };
  //   this.loginService.checkLogin(temp).subscribe((result: boolean) => {
  //     this.loginService.isValidUser = result;
  //     sessionStorage.setItem("isLoggedIn", String(result));
  //     if (!result) {
  //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Incorrect Password' });
  //     } else {
  //       this.myRoute.navigate(['/upload-file']);
  //     }
  //   }, err => {
  //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Unable to fetch data, server down' });
  //   });
  // }
}
