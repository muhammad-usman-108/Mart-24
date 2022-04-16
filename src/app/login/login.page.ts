import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(public navCntrl: NavController, private auth: Auth) {}

  async login() {
    const user = await signInWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
    );
    console.log(user);
    return user;
  }

  gotoSignup() {
    this.navCntrl.navigateForward('signup');
  }
}
