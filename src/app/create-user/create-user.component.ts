import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {Group} from "../group";
import {User} from "../user";
import {Role} from "../role";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

 user: User = new User();
  Groupslist:Array<Group>=[];
  Rolleslist:Array<Role>=[];
  submitted:boolean=false;



  constructor(
    public employeeService:UserService,
    private router: Router) { }

  ngOnInit() {
    this.getallGroups();
    this.getallRoles();
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();


  }

  save() {
    this.employeeService
    .createUser(this.user).subscribe(data => {
      console.log(data);
      // const datalist=JSON.stringify(data);
      // debugger;
      // console.log(datalist)
      // const dat1list=JSON.parse(datalist)
      // this.user = dat1list
      this.user = new User();
      this.gotoList();
    },
    error => console.log(error)

    );

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }

   //role list
  getallGroups(){
    // debugger;
    this.employeeService.getGroupList().subscribe(rdata=>{
      this.Groupslist=rdata;
      console.log(this.Groupslist)
    },
      error => console.log(error));
  }

     //role list
  getallRoles(){
    // debugger;
    this.employeeService.getRoleList().subscribe(rdata=>{
      this.Rolleslist=rdata;
      console.log(this.Rolleslist)
    },
      error => console.log(error));
  }


}
