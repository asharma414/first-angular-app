import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    let authObs: Observable<AuthResponseData>; 
    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.signin(form.value.email, form.value.password)
    } else {
      authObs = this.authService.signup(form.value.email, form.value.password)
    }

    authObs.subscribe(
      res => {
        console.log(res);
        this.isLoading = false;
      },
      err => {
        this.error = err;
        this.isLoading = false;
      }
    );

    form.reset();
  }

}
