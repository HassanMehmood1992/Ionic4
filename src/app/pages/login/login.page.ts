import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string; // 511 ID of AbbVie internal users
  password: string; // password of the user
  
  constructor(private router: Router) {
    
  }
  login(){
   // alert(this.username + this.password)
    this.router.navigateByUrl('/main/menu/first');
  }

  ngOnInit() {
  }

}
