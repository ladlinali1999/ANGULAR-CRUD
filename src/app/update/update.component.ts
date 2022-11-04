import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Editdeveloper } from './update.model';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  ID: any;
editdeveloper = new Editdeveloper;
data: any;
developer: any;

  constructor(
    private route:ActivatedRoute,
private dataservice: DataService,
private router: Router
  ) { }

  ngOnInit(): void {
    this.ID=this.route.snapshot.params['id'];
   console.log('id',this.ID);
    this.getDeveloper();
  }

  getDeveloper(){
    this.dataservice.getUsersbyid(this.ID).subscribe(res=>{
    this.developer=res;
    // this.developer=this.data;
    console.log(res);
    })
    }
    updatedeveloper(){
    this.dataservice.editDeveloper(this.ID,this.developer).subscribe(res=>{
    // Swal.fire('Updated!', 'Developer has been Updated.', 'success');
    alert("Users updated successfully");
    console.log(res);
    
    this.router.navigate(['/display']);
    })
    }
    

}
