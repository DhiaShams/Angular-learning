import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  state$!: Observable<object>;
  userData: any;
  response: any;
  usersList: any;
  commentList: any;

  constructor(private activatedRoute: ActivatedRoute, private Api: ApiService) { }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );

    this.userData = history.state.user;
    console.log('User Data from state:', this.userData);
    this.getAllUsers();
    this.getAllComments();
  }

  /*getDashboardDetails() {
   console.log('hiiii');
   this.Api.getUserDetail().subscribe(data => {
     this.response = data;
     console.log(data, 'jhhgj');
     this.dashboardDetails = this.response;
     console.log(this.dashboardDetails, "dashboard");

   })
 }*/

  getAllUsers() {
    console.log('Inside fnctn');
    this.Api.getUser().subscribe(data => {
      this.usersList = data;
      console.log(this.usersList, 'users');
    })
  }

  getAllComments() {
    this.Api.getComments().subscribe(data => {
      this.commentList = data;
      console.log(this.commentList, 'comments');

    })
  }
  /*getUserById() {
    const userId = 2
    console.log('Inside fnctn');
    this.Api.getUserUsingIdInHeader(userId).subscribe(data => {
      this.usersList = data;
      console.log(this.usersList, 'users');
    })

  }
  getUserByIdInPath() {
    const userId = 2;
    console.log('Inside fnctn');
    this.Api.getUserUsingIdInPath(userId).subscribe(data => {
      this.usersList = data;
      console.log(this.usersList, 'users');
    })

  }*/
}

