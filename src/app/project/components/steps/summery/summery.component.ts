import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProject } from 'src/app/project/models/project.model';
import { IProjectState, SelectedProjectSelector } from 'src/app/project/store/project';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss']
})
export class SummeryComponent implements OnInit, OnDestroy {
  projectSubscription$!: Subscription;
  project!: IProject;

  constructor(
    private router: Router,
    private _store: Store<IProjectState>,
  ) { }

  ngOnInit(): void {
    this.setProject();
  }

  ngOnDestroy(): void {
    this.projectSubscription$.unsubscribe();
  }

  private setProject() {
    this.projectSubscription$ = this._store.pipe(select(SelectedProjectSelector)).subscribe(res => {
      if (res)
        return this.project = res;
      this.router.navigate(['upload-image']);
    });

  }

  prevPage() {
    this.router.navigate(['people']);
  }

  submitPage() {
    alert("Thanks for submit!");
  }

}
