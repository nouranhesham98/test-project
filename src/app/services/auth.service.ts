import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail, 
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider
} from "firebase/auth";
import { environment } from '../../enviroments/enviroment';

// Initialize Firebase (do this only ONCE in your app)
const app = initializeApp(environment.firebaseConfig);
const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        localStorage.setItem('token', 'true'); // Consider storing something more meaningful than 'true'
        if (res.user?.emailVerified) {
          this.router.navigate(['/dashboard']); // Or your intended route after successful login
        } else {
          this.router.navigate(['/verify-email']);
        }
      })
      .catch(err => {
        alert(err.message);
        this.router.navigate(['/login']); // Redirect even on error
      });
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        alert('Registration Successful');
        this.sendEmailForVerification(res.user);
        this.router.navigate(['/login']); // Or perhaps a registration confirmation page
      })
      .catch(err => {
        alert(err.message);
        this.router.navigate(['/register']);
      });
  }

  logout() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        alert(err.message);
      });
  }

  forgotPassword(email: string) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        this.router.navigate(['/verify-email']); // Redirect to a "check your email" page
      })
      .catch(err => {
        alert(err.message); // Display the actual error message
      });
  }

  sendEmailForVerification(user: any) {
    sendEmailVerification(user) // No need to pass 'res' or type as 'any'
      .then(() => {
        this.router.navigate(['/verify-email']);
      })
      .catch(err => {
        alert('Something went wrong. Not able to send mail to your email.');
      });
  }

  googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(res => {
        console.log('Logged in user email:', res.user?.email);
        this.router.navigate(['/home']); // Redirect after Google sign-in
        localStorage.setItem('token', JSON.stringify(res.user?.uid)); // Store the UID
      })
      .catch(err => {
        alert(err.message);
      });
  }

    facebookSignIn() {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider).then(res => {
            console.log(res);
            this.router.navigate(['/home']);
            localStorage.setItem('token', JSON.stringify(res.user?.uid));
        }, err => {
            alert(err.message);
        })
    }
}