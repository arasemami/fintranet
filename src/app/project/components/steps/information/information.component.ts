import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusService } from 'src/app/project/services/status.service';
import { DefineProjectAction, SelectedProjectSelector, IProjectState, SelectedProjectAction } from 'src/app/project/store/project';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, OnDestroy {
  formInformation!: FormGroup;
  status: Array<string> = this.statusService.getStatus();
  submitted: boolean = false;
  minDate!: Date;
  maxDate!: Date;
  projectSubscription$!: Subscription;

  constructor(
    private statusService: StatusService,
    private router: Router,
    private fb: FormBuilder,
    private _store: Store<IProjectState>,
  ) {
  }

  ngOnInit(): void {
    this.createFormInformation();
    this.setInvalidDateForCalender();
    this.setProject();
  }

  ngOnDestroy(): void {
    this.projectSubscription$.unsubscribe();
  }

  private setProject() {
    this.projectSubscription$ = this._store.pipe(select(SelectedProjectSelector)).subscribe(res => {

      if (res)
        return this.formInformation.patchValue(res);
      this.router.navigate(['upload-image']);
    });
  }

  private setInvalidDateForCalender(): void {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(new Date().getDate() + 5);
  }

  private createFormInformation(): void {
    this.formInformation = this.fb.group({
      amount: [null, [Validators.required]],
      status: [null, [Validators.required]],
      date: [null, [Validators.required]],
      source: [null, [Validators.required]],
    })
  }

  prevPage(): void {
    this.dispatchProject();
    this.router.navigate(['upload-image']);
  }

  nextPage(): void {
    this.submitted = true;
    if (this.formInformation.valid) {
      this.dispatchProject();
      this.router.navigate(['people']);
    }
  }

  private dispatchProject() {
    this._store.dispatch(DefineProjectAction({
      payload: this.formInformation.value
    }));
  }
}
