import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthenticationService, private router: Router) {}

  logout(){
    this.authService.logOut().subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
