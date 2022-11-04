import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // loginform :any

  constructor(
    private httpclient:HttpClient

  ) { }

  addUsers(data: any){
    return this.httpclient.post('http://127.0.0.1:8000/api/users',data);
    }

    getUsersdata(){
      return this.httpclient.get('http://127.0.0.1:8000/api/users');
      }

      editDeveloper(id: string | number,data: string | number){
        return this.httpclient.patch('http://127.0.0.1:8000/api/users/'+id,data);
        }

        getUsersbyid(id: any){
          return this.httpclient.get('http://127.0.0.1:8000/api/users/'+id);
          }
          
          deleteUser(id: string | number){
            return this.httpclient.delete('http://127.0.0.1:8000/api/users/'+id);
            }

            addLoginData(data:any){
              return this.httpclient.post('http://127.0.0.1:8000/api/login',data);
              }
            
      
    
}
