import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './components/steps/information/information.component';
import { PeopleComponent } from './components/steps/people/people.component';
import { StepsComponent } from './components/steps/steps.component';
import { SummeryComponent } from './components/steps/summery/summery.component';
import { UploadImageComponent } from './components/steps/upload-image/upload-image.component';

const routes: Routes = [
  {
    path: '', component: StepsComponent, children: [
      { path: '', redirectTo: '/upload-image', pathMatch: 'full' },
      { path: 'upload-image', component: UploadImageComponent },
      { path: 'information', component: InformationComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'summery', component: SummeryComponent },
      { path: '**', redirectTo: '/upload-image', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
