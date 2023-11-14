import { Component } from "@angular/core";

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

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
}