import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLooggedIn = false;
  constructor() {

   }

   check_login(){
    // Simulate a login check
    // In a real application, you would check the user's authentication status
    // using a service or by checking a token in local storage.
    this.isLooggedIn = true; // Set to true for demo purposes
   }
}
