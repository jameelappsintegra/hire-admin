import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-openings-list',
  templateUrl: './job-openings-list.component.html',
  styleUrls: ['./job-openings-list.component.scss']
})
export class JobOpeningsListComponent implements OnInit {
  currentOpenings = [
    { jobName: 'Web developer', location: 'Confidential Company' },
    { jobName: 'Executive Quality Product', location: 'Confidential Company' },
    { jobName: 'Representative Solutions Central', location: 'Confidential Company' },
    { jobName: 'Specialist Security National', location: 'Confidential Company' },
    { jobName: 'Technician Assurance Internal', location: 'Confidential Company' },
    { jobName: 'Consultant Integration Chief', location: 'Confidential Company' },
    { jobName: 'Analyst Intranet Regional', location: 'Confidential Company' },
    { jobName: 'Developer Solutions Regional', location: 'Confidential Company' },
    { jobName: 'Specialist Division Future', location: 'Confidential Company' }]

  constructor() { }

  ngOnInit(): void {
  }

}
