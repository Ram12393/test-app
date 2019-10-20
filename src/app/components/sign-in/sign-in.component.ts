import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private storage: StorageService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.auth.login(this.loginForm.value).subscribe(res => {
        this.storage.set('token', res.token);
        this.router.navigate(['/home']);
      }, error => {
        this.snackBar.open(error.error.message, '', {
          duration: 2000
        });
      });
    }
  }
}
