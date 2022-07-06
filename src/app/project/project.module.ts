import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from '../project/components/steps/steps.component';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { ProjectRoutingModule } from './project-routing.module';
import { UploadImageComponent } from './components/steps/upload-image/upload-image.component';
import { InformationComponent } from './components/steps/information/information.component';
import { PeopleComponent } from './components/steps/people/people.component';
import { SummeryComponent } from './components/steps/summery/summery.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';

@NgModule({
  declarations: [
    StepsComponent,
    UploadImageComponent,
    InformationComponent,
    PeopleComponent,
    SummeryComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ButtonModule,
    StepsModule,
    CardModule,
    DividerModule,
    FileUploadModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    TableModule,
    ReactiveFormsModule,
    ToastModule,
    StoreModule.forRoot(appReducers),
  ]
})
export class ProjectModule { }
