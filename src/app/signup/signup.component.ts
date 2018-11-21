import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  email: string = '';
  password: string = '';
  

  constructor(private fire:AngularFireAuth,private router:Router) { }

  ngOnInit() {
  }
  signup(){
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password).then(user=>{
      console.log(this.email,this.password);
      this.router.navigate(['home']);
    }).catch(error=>{
      console.error(error);
    });
  }

}
