import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
// import {User} from 'firebase/app' this not work



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private isLoggedIn: Boolean = false;
  private Email: String;

  constructor(public afAuth: AngularFireAuth, public route: Router) {

    let status = localStorage.getItem('isLoggedIn')
    console.log(status)
    if (status === 'true') {
      this.isLoggedIn = true
    }
    else {
      this.isLoggedIn = false;
    }
    //this method not work on my pc there is error

    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     // User is signed in.
    //     this.isLoggedIn = true;
    //   } else {
    //     // No user is signed in.
    //     this.isLoggedIn = false;
    //     this.route.navigate(['/login'])
    //   }
    // });
  }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false')
    this.route.navigate(['/login'])
  }
}
