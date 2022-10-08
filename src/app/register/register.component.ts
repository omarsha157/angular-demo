import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })

  constructor(private fb:FormBuilder, private data:DataService) { }

  ngOnInit(): void {
  }

  register() {
    let acno = this.registerForm.value.acno
    let password = this.registerForm.value.password

    this.data.regi(acno,password)

  }

}
