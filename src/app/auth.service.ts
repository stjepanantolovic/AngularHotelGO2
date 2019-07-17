import { reject } from 'q';
import { EventEmitter } from '@angular/core';

export class AuthService {
    loggedIn = false;

    
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 800);
            }
        );
        return promise;
    }
    loggedInUpdated= new EventEmitter<boolean>();
    login() {
        this.loggedIn = true;
        this.loggedInUpdated.emit(this.loggedIn);
    }

    logout() {
        this.loggedIn = false;
        this.loggedInUpdated.emit(this.loggedIn);
    }
}