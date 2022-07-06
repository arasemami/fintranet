import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Upload Image',
        routerLink: 'upload-image',
      },
      {
        label: 'Information',
        routerLink: 'information'
      },
      {
        label: 'People',
        routerLink: 'people'
      },
      {
        label: 'Summery',
        routerLink: 'summery'
      }
    ];
  }

}
