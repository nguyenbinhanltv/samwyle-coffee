import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  themeMode: boolean = true;
  validateLoginForm!: FormGroup;
  validateEnquiryForm!: FormGroup;

  loading = false;

  percentage!: Observable<number>;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.validateLoginForm = this._fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      remember: [true],
    });

    this.validateEnquiryForm = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      nickname: ['', [Validators.required]],
      phoneNumberPrefix: ['+84'],
      phoneNumber: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      filePath: ['', [Validators.required]],
      submitTime: ['', [Validators.required]],
      agree: [false],
      expand: [false],
    });
  }

  ngOnDestroy(): void {
    this.login().unsubscribe();
  }

  submitLoginForm(): void {
    for (const i in this.validateLoginForm.controls) {
      this.validateLoginForm.controls[i].markAsDirty();
      this.validateLoginForm.controls[i].updateValueAndValidity();
    }

    this.login();
  }

  login(): Subscription {
    return this._authService.login(this.validateLoginForm.value).subscribe(
      respone => {
        if (respone.statusCode === 201) {
          this._authService.currentUser.token = respone.data.access_token;
          localStorage.setItem('access_token', respone.data.access_token);
          this._message.success(`Đăng nhập thành công !`);
          this._router.navigate(['danh-muc-san-pham']);
          // if (this._authService.getToken) {
          //   this._authService.getUserInfor(this._authService.getToken).subscribe(user => {
          //     this._authService.currentUser = user.data;
          //     this._message.success(`Đăng nhập thành công !`);
          //     this._router.navigate(['danh-muc-san-pham']);
          //   });
          // }
        } else {
          this._message.error(`Tên đăng nhập hoặc mật khẩu không đúng`);
        }
      }
    );
  }

  submitEnquiryForm(): void {
    for (const i in this.validateEnquiryForm.controls) {
      this.validateEnquiryForm.controls[i].markAsDirty();
      this.validateEnquiryForm.controls[i].updateValueAndValidity();
    }

    if (
      this.validateEnquiryForm.value &&
      this.validateEnquiryForm.controls['filePath']
    ) {
      this.validateEnquiryForm.controls['submitTime'].setValue(
        new Date(Date.now()).toLocaleString()
      );
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.validateEnquiryForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  handleChange(event: any): void {
  }

  getInt(value: any) {
    return Number.parseInt(value, 10);
  }
}
