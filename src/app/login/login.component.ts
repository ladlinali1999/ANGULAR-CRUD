import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AddLogin } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dataArr = new AddLogin;
  
  constructor( private dataservice :  DataService,
    private httpclient : HttpClient,
    private router : Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("",Validators.required)
  })

  logindata()
  {
    console.log(this.loginForm.value)
  }
  get username():FormGroup{
    return this.loginForm.get("username")as unknown as FormGroup
  }
  get password(): FormGroup{
    return this.loginForm.get("password")as unknown as FormGroup
  }

  addloginData(){
    console.log(this.dataArr); 
  //  return this.httpclient.post('http://127.0.0.1:8000/api/login',this.dataArr).subscribe(
  //   data => console.log(data),
  //   error => console.log(error)
    
  //  )
    this.dataservice.addLoginData(this.dataArr).subscribe(res=>{
      console.log(res);
     // this.router.navigate(['/user']);
    })
  }
}
