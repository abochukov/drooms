import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public usernames;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.dataService.getAllUsers().subscribe(users => {
      this.usernames = users;
    });
  }

  showDetails(id) {
    this.router.navigate(['main', id]);
  }

}
