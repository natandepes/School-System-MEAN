import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from '../message/input/input.component';
import { MessageListComponent } from "../message/message-list/message-list.component";
import { MessageComponent } from '../message/message.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

// Componentes adicionados
import { UserAddComponent } from '../user/user-add/user-add.component';
import { UserListComponent } from '../user/user-list/user-list.component';

import { ClassAddComponent } from '../class copy/class-add/class-add.component';
import { ClassListComponent } from '../class copy/class-list/class-list.component';

import { StudentAddComponent } from '../student/student-add/student-add.component';
import { StudentListComponent } from '../student/student-list/student-list.component';

import { ProfessorAddComponent } from '../professor/professor-add/professor-add.component';
import { ProfessorListComponent } from '../professor/professor-list/professor-list.component';

import { ClassroomAddComponent } from '../classroom/classroom-add/classroom-add.component';
import { ClassroomListComponent } from '../classroom/classroom-list/classroom-list.component';

import { SubjectAddComponent } from '../subject/subject-add/subject-add.component';
import { SubjectListComponent } from '../subject/subject-list/subject-list.component';

import { CourseAddComponent } from '../course/course-add/course-add.component';
import { CourseListComponent } from '../course/course-list/course-list.component';
@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        InputComponent,
        MessageListComponent,
        HeaderComponent,
        LoginComponent,
        SignUpComponent,
        UserAddComponent,
        UserListComponent,
        ClassAddComponent,
        ClassListComponent,
        StudentAddComponent,
        StudentListComponent,
        ProfessorAddComponent,
        ProfessorListComponent,
        ClassroomAddComponent,
        ClassroomListComponent,
        SubjectAddComponent,
        SubjectListComponent,
        CourseAddComponent,
        CourseListComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}