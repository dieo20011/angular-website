import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError = false;

  constructor(private formBuilder: FormBuilder,private userService: UserService, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  getFormControl(controlName: string){
    return this.loginForm.get(controlName);
  }
  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // Kiểm tra email và mật khẩu
    const user = this.userService.getUser();
    if (user && user.email === email && user.password === password) {
      this.toastr.success('Registration successful!', 'Success');
      this.router.navigate(['/home']);
    } else {
      // Xử lý đăng nhập không thành công
      this.loginError = true;
    }
  }
}
