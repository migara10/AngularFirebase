import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  constructor(private authservice: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.value.email || '';
    const password = this.loginForm.value.password || '';

    // const { email , password } = this.loginForm.value ;
    this.authservice.login(email, password).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

}
