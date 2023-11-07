import { Component } from "@angular/core";

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent {

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
