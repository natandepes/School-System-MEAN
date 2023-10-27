import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    signUpForm: FormGroup;

    constructor(private authService: AuthService, private formBuilder: FormBuilder) {
        this.signUpForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    createAccount(username: string, password: string)
    {
        this.authService.createUser(username, password)
        .subscribe();
    }

    onSubmit(){

        let usr: string = this.signUpForm.get('username').value;
        let pwd: string = this.signUpForm.get('password').value;

        this.createAccount(usr, pwd);
    }
    
}