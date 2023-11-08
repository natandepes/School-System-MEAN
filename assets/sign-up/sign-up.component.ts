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
            cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
            name: ['', Validators.required],
            adress: ['', Validators.required],
            telephone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            gender: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    createAccount(username: string, password: string)
    {
        this.authService.createUser(username, password)
        .subscribe(
            dadosSucesso => console.log('Dados Sucesso Sign Up:', dadosSucesso),
            dadosErro => console.log('Dados Erro Sign Up:', dadosErro)
        );
    }

    onSubmit(){
        // let pwd: string = this.signUpForm.get('password').value;
        // this.createAccount(usr, pwd);
    }  
}
