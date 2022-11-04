import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AddUsers } from './users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  addUsers = new AddUsers;
  // getUsers: any;

  constructor(
    private dataservice :DataService,
    // private router:Router
  ) { }

  ngOnInit(): void {
  }
  userform = new FormGroup({
    name : new FormControl("",Validators.required),
    mobile : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required),
    email : new FormControl("",[Validators.required, Validators.email])
  })

  addData(){
    console.log(this.userform.value)
  }

  // addDvveloperdata(){
  //   this.dataservice.addUsers(this.addUsers).subscribe(res =>{
  //   // Swal.fire('Added!', 'Developer has been Added.', 'success');
  //   // this.router.navigate(['/managedeveloper']);
  //   // console.log(res);
  //   })
  //   }

   
    

  get name():FormGroup{
    return this.userform.get("name")as unknown as FormGroup

  }
  get mobile():FormGroup{
    return this.userform.get("mobile")as unknown as FormGroup
  }

  get email(): FormGroup{
    return this.userform.get("email")as unknown as FormGroup
  }
  get password(): FormGroup{
    return this.userform.get("password")as unknown as FormGroup
  }

  addUsersData(){
    console.log(this.addUsers); 
    this.dataservice.addUsers(this.addUsers).subscribe(res=>{
      console.log(res);
      // this.router.navigate(['/display']);
    })
  }

  // getUsersData(){
  //   this.dataservice.addUsers(this.addUsers).subscribe(res=>{
  //   // console.log(res);
  //   this.getUsers = res;
  //   })
  //   }
    
}
