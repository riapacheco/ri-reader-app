import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  loginView = false;

  user: IUser = {
    name: '',
    email: '',
    password: '',
    passwordCheck: ''
  }

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}
