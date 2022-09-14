import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  public authUser$!: Observable<firebase.User | null>;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { 
    this.authUser$ = fireAuth.authState; 
  }

  register(email: string, password: string): any {
    this.fireAuth.createUserWithEmailAndPassword(email, password)
        .then((res: any) => {
          return res;
        })
        .catch((error: any) => {
          return error;
        });
  }

  signIn(email: string, password: string): any {
    this.fireAuth.signInWithEmailAndPassword(email, password)
        .then((res: any) => {
          return res;
        })
        .catch((error: any) => {
          return error;
        })
  }

  signOut(): void {
    this.fireAuth.signOut();
    this.router.navigateByUrl('/');
  }

  deleteAccount(): void {
    this.fireAuth.authState.subscribe((state: any) => {
      state.deleteAccount()
            .then((res: any) => {
              return res;
            })
            .catch((error: any) => {
              return error;
            })
    })
  }
}
