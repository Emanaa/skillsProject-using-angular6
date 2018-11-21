import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})


export class MyskillsComponent implements OnInit {

  data = {
    name:'',
    phone:'',
    skill:'',
    city:'',
    price:'',
    comment:''
 
  };

  itemList:AngularFireList<any>;
  itemArray=[];

  constructor(public db:AngularFireDatabase,public router:Router ) {
    this.itemList=db.list('skills');
    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y =action.payload.toJSON();
        y['$key']=action.key;
        this.itemArray.push(y as ListItemClass);
      });
    });
    console.log(this.itemArray);
    
   }

  ngOnInit() {
  }
  editSkill($key){
    this.data.name;
    this.data.phone;
    this.data.skill;
    this.data.city;
    this.data.price;
    this.data.comment;

    this.itemList.set($key, {
      name:this.data.name,
      phone:this.data.phone,
      skill:this.data.skill,
      city:this.data.city,
      price:this.data.price,
      comment:this.data.comment
    })
    this.itemArray=[]
    this.router.navigate(['/myskills']);

  }
  deleteSkill($key){
     this.itemList.remove($key);
     this.itemArray=[]
  }

  editForm($key){
    for(let value of this.itemArray){
      if(value['$key']==$key){
        this.data.name=value['name'];
        this.data.phone=value['phone'];
        this.data.skill=value['skill'];
        this.data.city=value['city'];
        this.data.price=value['price'];
        this.data.comment=value['comment'];
      }
   
    }
  }

}
 

export class ListItemClass{
  name:string;
  phone:string;
  skill:string;
  city:string;
  price:string;
  comment:string;

}