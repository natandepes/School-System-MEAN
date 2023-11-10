import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from "@angular/forms";

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
        }, { validator: this.passwordMatchValidator() });
    }

    passwordMatchValidator(): ValidatorFn {
        return (control: FormGroup): { [key: string]: any } | null => {
          const password = control.get('password');
          const confirmPassword = control.get('confirmPassword');
      
          if (password && confirmPassword && password.value !== confirmPassword.value) {
            confirmPassword.setErrors({ passwordMismatch: true });
            return { passwordMismatch: true };
          } else {
            return null;
          }
        };
    }

    onKeyPress(event: KeyboardEvent) {

        // if (field === 'cpf' && event.target['value'].length >= maxLength) {
        //     event.preventDefault();
        //     return false;
        // }

        const regex = /[0-9]|\./;
        const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
          event.preventDefault();
          return false;
        }
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
