import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    @Output() login = new EventEmitter();

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) 
    {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    
    onSubmit(){
        this.router.navigate(['/message']);
        this.login.emit();
    }
}