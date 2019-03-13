import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  isLoggedIn: Boolean;

  constructor(private auth: AuthService) { }

  /*
   * ngOnInit() use atuhService for allowed or denny access to
   * articles editor
   */
  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  submit() {
    console.log('Ok');
  }
}
