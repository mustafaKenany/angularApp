import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})

export class MyskillsComponent implements OnInit {

  itemList: AngularFireList<any> // this List is used with firebase
  itemArray = []           // this Array use with form when we need to display information on html page 
  personalinformation =   //this array use with ngModel
    {
      firstName: '',
      lastName: '',
      telphone: '',
      skill: '',
      province: '',
      city: '',
      price: '',
      pictureWork: '',
      notes: '',
    }

  constructor(public db: AngularFireDatabase, public route: Router) {

    // this code to save data into firebase
    this.itemList = db.list('myskills')
    this.itemList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        let y = action.payload.toJSON()
        y['$key'] = action.payload.key
        this.itemArray.push(y as ListItemClass)
      })
    })
  }

  ngOnInit() {
  }

  EditFunction($key) {
    //this function is fire when user click on edit btn "when user want to update his information"
    //here we using ngModel to pass information to form to make user enter new values
    for (let value of this.itemArray) {
      if($key == value['$key'])
      {
        
        this.personalinformation.firstName = value['dbFirstName'];
        this.personalinformation.lastName = value['dbLastName'];
        this.personalinformation.telphone = value['dbtelephone'];
        this.personalinformation.skill = value['dbSkill'];
        this.personalinformation.province = value['dbProvince'];
        this.personalinformation.city = value['dbCity'];
        this.personalinformation.price = value['dbPrice'];
        this.personalinformation.notes = value['dbNotes'];
      }
     
    }
  }
  modificationFunction($key) {
    //this function is fire when user click on save btn "when user input new information and click update"
    this.personalinformation.firstName
    this.personalinformation.lastName
    this.personalinformation.skill
    this.personalinformation.telphone
    this.personalinformation.price
    this.personalinformation.province
    this.personalinformation.city
    this.personalinformation.notes

    this.itemList.set($key, {
      dbFirstName: this.personalinformation.firstName,
      dbLastName: this.personalinformation.lastName,
      dbtelephone: this.personalinformation.telphone,
      dbSkill: this.personalinformation.skill,
      dbProvince: this.personalinformation.province,
      dbCity: this.personalinformation.city,
      dbPrice: this.personalinformation.price,
      dbNotes: this.personalinformation.notes

    })
    this.itemArray = []

  }
  myskillOnDelete($key) {
    //this function is fire when user click on delete btn    
    this.itemList.remove($key)
    this.itemArray = []
  }
}

export class ListItemClass {
  //contain all information that I will retrive from firebase
  $key: string;
  dbFirstName: string;
  dbLastName: string;
  dbtelephone: string;
  dbSkill: string;
  dbProvince: string;
  dbCity: string;
  dbPrice: string;
  dbNotes: string;
}