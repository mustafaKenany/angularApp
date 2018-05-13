import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})

export class AddSkillsComponent implements OnInit {

  personalinformation =
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

  itemList: AngularFireList<any>
  constructor(public db: AngularFireDatabase, public route: Router) {
    this.itemList = db.list('myskills')
  }

  ngOnInit() {

    console.log(this.personalinformation.firstName);
    console.log(this.personalinformation.lastName);
    console.log(this.personalinformation.telphone);
    console.log(this.personalinformation.province);
    console.log(this.personalinformation.city);
    console.log(this.personalinformation.skill);


    //let isDone:boolean = true
  }

  insertSkill() {
    this.itemList.push(
      {
        dbFirstName: this.personalinformation.firstName,
        dbLastName: this.personalinformation.lastName,
        dbtelephone: this.personalinformation.telphone,
        dbSkill: this.personalinformation.skill,
        dbProvince: this.personalinformation.province,
        dbCity: this.personalinformation.city,
        dbPrice: this.personalinformation.price,
        dbNotes: this.personalinformation.notes
      }

    )
    alert('Added sucess');
    this.personalinformation.firstName = '',
      this.personalinformation.lastName = '',
      this.personalinformation.telphone = '',
      this.personalinformation.skill = '',
      this.personalinformation.province = '',
      this.personalinformation.city = '',
      this.personalinformation.price = '',
      this.personalinformation.notes = ''

    this.route.navigate(['/allskills'])

  }

}
