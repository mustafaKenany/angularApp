import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

@Component({
  selector: 'app-viewskill',
  templateUrl: './viewskill.component.html',
  styleUrls: ['./viewskill.component.css']
})

export class ViewskillComponent implements OnInit {
  //defination sections
  itemList: AngularFireList<any> // this List is used with firebase
  itemArray = []           // this Array use with form when we need to display information on html page   

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