import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

@Component({
  selector: 'app-allskills',
  templateUrl: './allskills.component.html',
  styleUrls: ['./allskills.component.css']
})

export class AllskillsComponent implements OnInit {

  itemList: AngularFireList<any>
  itemArray = []

  constructor(public db: AngularFireDatabase) {
    this.itemList = db.list('myskills')
    this.itemList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        let y = action.payload.toJSON()
        y['$key'] = action.payload.key
        this.itemArray.push(y as ListItemClass)
      })
    })
    console.log(this.itemArray)
  }

  ngOnInit() {
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