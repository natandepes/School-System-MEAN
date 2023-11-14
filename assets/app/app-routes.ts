import { Routes } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { StudentComponent } from '../student/student.component';
import { SubjectComponent } from '../subject/subject.component';
import { StudentEditComponent } from '../student/student-edit/student-edit.component';
import { StudentProfileComponent } from '../student/student-profile/student-profile.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent }, 
  { path: 'messages', component: MessageComponent },
  { path: 'aluno', component: StudentComponent },
  { path: 'materias', component: SubjectComponent },
  {path: 'student-edit', component: StudentEditComponent},
  {path: 'student-profile', component: StudentProfileComponent},
  {path: 'subject', component: SubjectComponent},
  { path: '', redirectTo: '/login', pathMatch:'full' }
 
];