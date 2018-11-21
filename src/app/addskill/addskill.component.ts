import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {


 data = {
   name:'',
   phone:'',
   skill:'',
   city:'',
   price:'',
   comment:''

 };

 itemList:AngularFireList<any>
  constructor(public db:AngularFireDatabase,public router:Router) {
    this.itemList=db.list('skills');
    
  }

  ngOnInit() {
    console.log(this.data);
  }

  inserSkill(){
    this.itemList.push({
      name:this.data.name,
      phone:this.data.phone,
      skill:this.data.skill,
      city:this.data.city,
      price:this.data.price,
      comment:this.data.comment
     
    });
    this.router.navigate(['/myskills']);
  }


  }


