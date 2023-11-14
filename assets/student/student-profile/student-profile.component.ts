import { Component, Input } from "@angular/core";
import { Student } from "../../../models-ts/student";
import { Router } from "@angular/router";

@Component({
    selector: 'app-student-profile',
    templateUrl: './student-profile.component.html',
    styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {

    constructor(private router: Router){}

    @Input() aluno: Student;
   
};
