import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router} from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  email:string =''
  password:string=''
  constructor(private fire:AngularFireAuth, private route:Router) { }

  ngOnInit() {
  }

  myLogin()
  {
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(user=>{
      console.log(this.email,this.password)
      localStorage.setItem('isLoggedIn','true')
      this.route.navigate(['home'])
    }).catch(error=>{
      console.log(error)
    })
  }

}
