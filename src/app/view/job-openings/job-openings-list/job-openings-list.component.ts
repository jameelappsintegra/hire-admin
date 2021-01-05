import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-openings-list',
  templateUrl: './job-openings-list.component.html',
  styleUrls: ['./job-openings-list.component.scss']
})
export class JobOpeningsListComponent implements OnInit {
  currentOpenings = [
    { jobName: 'Web developer', location: 'Confidential Company', endDate: '10 Dec 2020' },
    { jobName: 'Executive Quality Product', location: 'Confidential Company', endDate: '20 Dec 2020' },
    { jobName: 'Representative Solutions Central', location: 'Confidential Company', endDate: '10 Sep 2020' },
    { jobName: 'Specialist Security National', location: 'Confidential Company', endDate: '15 Dec 2020' },
    { jobName: 'Technician Assurance Internal', location: 'Confidential Company', endDate: '10 Jan 2020' },
    { jobName: 'Consultant Integration Chief', location: 'Confidential Company', endDate: '19 Dec 2020' },
    { jobName: 'Analyst Intranet Regional', location: 'Confidential Company', endDate: '21 July 2020' },
    { jobName: 'Developer Solutions Regional', location: 'Confidential Company', endDate: '25 Dec 2020' },
    { jobName: 'Specialist Division Future', location: 'Confidential Company', endDate: '10 Dec 2020' }]

  constructor() { }

  ngOnInit(): void {
  }

}
