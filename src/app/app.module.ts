import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegistercomponetComponent } from './registercomponet/registercomponet.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { AllskillsComponent } from './allskills/allskills.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ViewskillComponent } from './viewskill/viewskill.component';


const router: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'addskill',
    component: AddSkillsComponent
  },
  {
    path: 'login',
    component: LogincomponentComponent
  },
  {
    path: 'registration',
    component: RegistercomponetComponent
  },
  {
    path: 'myskills',
    component: MyskillsComponent
  },
  {
    path: 'allskills',
    component: AllskillsComponent
  },
  {
    path: 'viewskill',
    component:ViewskillComponent
  }

]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddSkillsComponent,
    HomeComponent,
    LogincomponentComponent,
    RegistercomponetComponent,
    MyskillsComponent,
    AllskillsComponent,
    ViewskillComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), 
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule ,// imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
