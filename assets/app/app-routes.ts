import { Routes } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { StudentComponent } from '../student/student.component';
import { SubjectComponent } from '../subject/subject.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent }, 
  { path: 'message', component: MessageComponent },
  { path: 'aluno', component: StudentComponent },
  { path: 'materias', component: SubjectComponent },
  { path: '', redirectTo: '/login', pathMatch:'full' }
];