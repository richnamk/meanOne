import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _route: Router,
    private _location: Location,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this._userService.getCurrentUser(
      (user) => {
        // Decide where to go.... go to dashboard
        if (!user) {
          this._route.navigateByUrl('/');
          return;
        }
        this._location.back();
      },
      console.log
    )
  }

}
