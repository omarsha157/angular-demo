import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db:any = {
    'acno1':{acno:'acno1',pword:'abc'},
    'acno2':{acno:'acno2',pword:'abc'},
}

  constructor(private rt:Router) { }

  auth(acno:any,pswd:any) {
    if(acno in this.db) {

      if(pswd == this.db[acno].pword){

        alert('login success')

        this.rt.navigateByUrl('homeOne')

      } else {
        alert('incorrect password')
      }
    } else {
      alert('user does not exits')
    }
  }

  regi(acno:any,pswd:any) {
    if(!(acno in this.db)) {

      this.db[acno] = {acno:acno,pword:pswd}

      alert('successfully registered')

      this.rt.navigateByUrl('')
      
    } else {
      alert('user already exist')
    }
  }
}
