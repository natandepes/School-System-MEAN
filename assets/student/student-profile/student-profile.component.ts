import { Component } from "@angular/core";

@Component({
    selector: 'app-student-profile',
    templateUrl: './student-profile.component.html',
    styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {

    consola(){
        console.log('teste')
    }
   
    aluno={
        cpf: 12345678901,
        nome: "Josélios III",
        adress: "Rua dos Bobos, n0",
        telephone: "9 3333-4444",
        email: "joseliosiii@bol.com",
        gender: "redpill",
        subjects: [
                    "Super Aula", 
                    "Introdução ao Stack Overflow",
                    "Dissertações sobre a importância de descomentar para o funcionamento de aplicações",
                    "Estatística Freestyle",
                    "1001 Utilidades para a expressão 'Na verdade...' "
        ]
    }
};
