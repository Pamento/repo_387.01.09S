import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn: Boolean;
  fragment: string;
  constructor(
    private route: ActivatedRoute,
    private DataService: DataService,
    private auth: AuthService
    ) { }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }
  logout() {
    this.DataService.logOut();
  }
}
