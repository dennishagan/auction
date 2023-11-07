import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm = {
  email: '',
  password: ''
}
errorCode: string = ''
  constructor(
    private api: ApiService,
    private router: Router,
    ) {}

    ngOnInit() {

    }


    login(formData: NgForm) {

      if (formData.valid) {
        this.api.login().subscribe((res:any) => {
          console.log(res);
          res.forEach((user:any) => {
            if ((user.email === this.loginForm.email) && (user.password === this.loginForm.password)){
              this.errorCode = ''
              this.router.navigateByUrl('/listing')
            } else {
              this.errorCode = 'Invalid username or password'
            }
          });
        })
      } 
    }
}
