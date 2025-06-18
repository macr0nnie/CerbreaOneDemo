import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLooggedIn = false;
  constructor() {
   }
   check_login(){
    this.isLooggedIn = true; // Set to true for demo purposes
   }
}
