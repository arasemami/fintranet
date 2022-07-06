import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IPerson } from 'src/app/project/models/people.model';
import { PeopleService } from 'src/app/project/services/people.service';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DefineProjectAction, IProjectState, SelectedProjectSelector } from 'src/app/project/store/project';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers: [MessageService]
})
export class PeopleComponent implements OnInit, OnDestroy {
  people: Array<IPerson> = this.peopleService.getPeople();
  selectedPeople!: IPerson | undefined;
  projectSubscription$!: Subscription;

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private messageService: MessageService,
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
        return this.selectedPeople = res?.person;
      this.router.navigate(['upload-image']);
    });
  }

  prevPage() {
    this.dispatchProjectAction();
    this.router.navigate(['information']);
  }

  nextPage() {
    if (!this.selectedPeople)
      return this.showError();
    this.dispatchProjectAction();
    this.router.navigate(['summery']);
  }

  private dispatchProjectAction() {
    this._store.dispatch(DefineProjectAction({
      payload: { person: this.selectedPeople }
    }));
  }

  private showError(): void {
    this.messageService.add({ severity: 'error', summary: 'Selected', detail: 'please select a person' });
  }
}
