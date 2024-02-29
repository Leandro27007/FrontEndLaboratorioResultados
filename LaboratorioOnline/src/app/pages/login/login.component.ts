import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginObj: Login;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }
  ngOnInit(): void {
    const token = localStorage.getItem('angular17token');

    if(token)
      this.router.navigateByUrl('/dashboard')

  }


  onLogin() {
    debugger;
    this.http.post('https://localhost:7290/api/Autenticacion/Login', this.loginObj).subscribe((res:any)=>{
      
    if(res.token) {
        alert("Login Success");
        localStorage.setItem('angular17token', res.token)
        this.router.navigateByUrl('/dashboard')
      } else {
        alert(res.message)
      }
    })
  }
}

export class Login { 
    userName: string;
    password: string;
    constructor() {
      this.userName = '';
      this.password = '';
    } 
}
