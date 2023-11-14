import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { Student } from "../../models-ts/student";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    signUpForm: FormGroup;

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
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

      const regex = /[0-9]|\./;
      const key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    }


    newStudent(formValue: any){

      const st: Student = new Student();

      st.cpf = formValue.cpf;
      st.name = formValue.name;
      st.adress = formValue.adress;
      st.telephone = formValue.telephone;
      st.email = formValue.email;
      st.gender = formValue.gender;
      st.password = formValue.password;

      return st;
    }



    onSubmit(){
      const form = this.signUpForm.value;
      
      console.log('Student:', this.newStudent(form));

      this.authService.createUser(this.newStudent(form))
      .subscribe
      (
        dadosSucesso => 
        {
          console.log('Cadastro Sucesso:', dadosSucesso);
          this.router.navigate(['/login']);
        },
        dadosErro => console.log('Cadastro Erro:', dadosErro)
      );
    }  
}
