import { Component,OnInit } from '@angular/core';
import { User }    from './user';
import {UserService} from './user-form.service'
@Component({
  selector: 'user-form',
  templateUrl: './app/user-form.component.html',
  providers: [UserService]

})
export class UserFormComponent implements OnInit {
    users:User[];
    ErrorMessage:string;
    user:User;
    constructor(private userService: UserService) { }

 ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(
        user=>this.users=user,
     error=>this.ErrorMessage=<any>error
    );
  }
    submitted = false;

addUser(s1:string,s2:string,s3:string,i:number){
  this.submitted = true;
  this.user=new User(s1,s2,s3,i);
  if (!this.user) { 
    console.log("nidhi");
    return; }
  //console.log(user1.UserName);
  this.userService.create(this.user)
                   .subscribe(
                    user1  => this.users.push(user1),
                    error =>  this.ErrorMessage = <any>error);
}

  model= new User('nidhipurohith@gmail.com','Abcd@97','Abcd@97',1234567890);




  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
}
