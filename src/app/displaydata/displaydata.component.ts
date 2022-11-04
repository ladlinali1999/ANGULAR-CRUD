import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AddUsers } from '../user/users.model';
@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss']
})
export class DisplaydataComponent implements OnInit {
  UserData: any;
  

  constructor(private dataservice: DataService) { }
 

  ngOnInit(): void {
    this.getUsersD();
  }

  getUsersD(){
    this.dataservice.getUsersdata().subscribe(res =>{
    // console.log('hii',res);
    this.UserData = res;
    })
    }

    deleteUserData(id:number){
      
      this.dataservice.deleteUser(id).subscribe(response => {
      alert("Are you sure");
      this.getUsersD();
      });
      }
      };
      //display 



