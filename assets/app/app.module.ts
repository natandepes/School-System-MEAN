import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


// Componentes adicionados
import { InputComponent } from '../message/input/input.component';
import { MessageListComponent } from "../message/message-list/message-list.component";
import { MessageComponent } from '../message/message.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HeaderComponent } from '../header/header.component';
import { StudentComponent } from '../student/student.component';
import { SubjectComponent } from '../subject/subject.component';

import { routes } from './app-routes';



@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        InputComponent,
        MessageListComponent,
        HeaderComponent,
        LoginComponent,
        SignUpComponent,
        StudentComponent,
        SubjectComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}