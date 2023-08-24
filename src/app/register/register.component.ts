import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterFormComponent implements OnInit {

  name: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.name, this.email, this.password);
  }

}