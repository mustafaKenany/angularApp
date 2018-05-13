import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registercomponet',
  templateUrl: './registercomponet.component.html',
  styleUrls: ['./registercomponet.component.css']
})
export class RegistercomponetComponent implements OnInit {

  email: string = ''
  password: string = ''

  constructor(private fire: AngularFireAuth, private route: Router) { }

  ngOnInit() {
  }

  Registeration() {
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log(this.email, this.password)
        this.route.navigate(['home'])
      }).catch(error => {
        console.log(error)
      })
  }

}
