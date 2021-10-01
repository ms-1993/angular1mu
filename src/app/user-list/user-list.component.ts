import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:Observable<User[]> | undefined;




  constructor(private employeeService:UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.employeeService.getUsersList();
  }

  deleteUser(id: number) {
    this.employeeService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(id: number){
    // debugger;
    this.router.navigate(['/details',id]);
  }

  updateUser(id: number){
    // debugger;
    this.router.navigate(['/update', id]);
  }

}
