import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models-ts/student';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

constructor(private route: ActivatedRoute, private authService: AuthService) {}

    studentId: string;

    currentStudent: Student;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
      console.log('Student Id:', this.studentId);
      this.authService.getUsers()
      .subscribe
      (
        dadosSucesso => {
            
            const conjuntoAlunos: Student[] = dadosSucesso.students.map((std: any) => this.authService.mapUser(std));
            
            this.currentStudent = conjuntoAlunos.find((std: Student) => std._id == this.studentId);

            console.log('Current Student: ', this.currentStudent);

        },
        dadosErro => console.log('Erro Get Student: ', dadosErro)
      );
    });
  }
}
