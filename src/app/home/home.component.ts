import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


// import { User } from '../_models/index';
// import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    // directives: [ROUTER_DIRECTIVES],
})

export class HomeComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) {

  }

  ngOnInit() {

  }

//    users: User[] = [];
//
//    constructor(private userService: UserService) { }
//
//    ngOnInit() {
//        // get users from secure api end point
//        this.userService.getUsers()
//            .subscribe(users => {
//                this.users = users;
//            });
//    }

}
