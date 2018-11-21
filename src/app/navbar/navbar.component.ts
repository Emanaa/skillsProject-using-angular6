import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:Observable<firebase.User>;
  private isLoggedIn:Boolean=false;
  private email:string;

  constructor(public fire:AngularFireAuth,public router:Router) {
    let status=localStorage.getItem("isLoggedIn");

    if(status==='true'){
     this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }

    // firebase.auth().onAuthStateChanged(function(user){
    //   if(user){
    //       this.isLoggedIn=true;
    //   }
    //   else{
    //     this.isLoggedIn=false;
    //     this.router.navigate(['login']);
    //   }
    // });
   }

  ngOnInit() {
  }

  logout(){
    this.fire.auth.signOut();
    this.isLoggedIn=false;
    localStorage.setItem("isLoggedIn","false");
    this.router.navigate(['login']);

  }

}
