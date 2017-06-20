import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {UserFormComponent} from './user-form.component'
@Injectable()
export class UserService {
    private _userUrl="http://localhost:8080/PluralsightPrac/pluralsight/users/getallusers";
     private userUrl="http://localhost:8080/PluralsightPrac/pluralsight/users/user";
    constructor(private _http:Http){}
    getUsers(): Observable<User[]>
    {
        return this._http.get(this._userUrl)
        .map((response:Response) => <User[]>response.json())
        .do(data=>console.log(JSON.stringify(data)))
        .catch(this.handleError);
    
    }
     create(user : User): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
       // console.log(JSON.stringify(user));
    return this._http.post(this.userUrl, JSON.stringify(user), options)
                    .map((response:Response) => <User>response.json())
                    .catch(this.handleError);

  }

    private handleError(error:Response) 
    {
        console.error(error);
        return Observable.throw(error.json().error|| 'Server Error');

    }
}