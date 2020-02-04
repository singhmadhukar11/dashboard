import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userId;
  userPassword;
  showElement;

  loginForm = new FormGroup({
    userId: new FormControl(''),
    userPassword: new FormControl(''),
  });


  login() {
    if (this.loginForm.value.userId == "test@email.com" || this.loginForm.value.userPassword == "test") {
      this.showElement = true;
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
        this.showElement = false;
      }, 2000);
     
    } else {
      alert('Enter correct password')
    }
  }

  ngOnInit() {
  }

}
