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
  { path: 'anotacoes', component: MessageComponent },
  { path: 'aluno/:id', component: StudentComponent },
  { path: 'materias', component: SubjectComponent },
  {path: 'student-edit', component: StudentEditComponent},
  { path: '', redirectTo: '/login', pathMatch:'full' }
 
];