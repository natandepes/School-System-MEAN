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

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        InputComponent,
        MessageListComponent,
        HeaderComponent,
        LoginComponent,
        SignUpComponent
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