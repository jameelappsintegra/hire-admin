import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isHeaderEnable: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.log(event);
          
          this.isHeaderEnable = (event.url !== '/job-openings/job-create')
        }
      });
  }

}
