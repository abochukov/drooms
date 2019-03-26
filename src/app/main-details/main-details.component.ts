import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../api/data.service';

@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.css']
})
export class MainDetailsComponent implements OnInit {

  public id: string;
  public user: string;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.dataService.getUserById(this.id).subscribe(user => {
      this.user = user;
    });
  }

}
