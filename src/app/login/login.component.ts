import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  })

  constructor(private rt:Router,private fb:FormBuilder,private data:DataService) { }

  ngOnInit(): void {
  }

  login() {
    let acno = this.loginForm.value.acno
    let password = this.loginForm.value.password

    this.data.auth(acno,password)
    
    
  }
}
