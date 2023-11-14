import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Student } from "../../models-ts/student";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Output() login = new EventEmitter();

    loginForm: FormGroup;

    allUsers: Student[] = [];

    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) 
    {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.authService.getUsers()
        .subscribe
        (
            dadosSucesso => {
                dadosSucesso.students.map((std: any) => this.allUsers.push(this.authService.mapUser(std)));
                console.log('allUsers: ', this.allUsers);
            },
            dadosErro => console.log('Erro:', dadosErro)
        )
    }
    
    onSubmit(){
        const form = this.loginForm.value;
        console.log('Form:', form);

        this.allUsers.forEach(std => {
            if(form.username == std.name && form.password == std.password){
                this.router.navigate(['/aluno', std._id]);
                this.login.emit();
            }
        });
        
    }
}