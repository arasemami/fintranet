import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DefineProjectAction, IProjectState, SelectedProjectSelector } from 'src/app/project/store/project';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  providers: [MessageService]
})
export class UploadImageComponent implements OnInit {
  imageSrc: any;
  projectSubscription$!: Subscription;

  constructor(
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
      this.imageSrc = res?.image;
    });
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }

  nextPage() {
    if (!this.imageSrc) {
      return this.showError();
    }
    this._store.dispatch(DefineProjectAction({
      payload: { image: this.imageSrc }
    }));
    this.router.navigate(['information']);
  }

  private showError(): void {
    this.messageService.add({ severity: 'error', summary: 'Selected', detail: 'please select a image' });
  }
}
