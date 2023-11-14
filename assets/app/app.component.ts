import { Component, OnInit } from '@angular/core';  
import { MessangerService } from '../../services/messanger.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Student } from '../../models-ts/student';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessangerService, AuthService]
})
export class AppComponent implements OnInit {
    message = {
        content: 'Muito conhecimento abragente sobret tudo',
        author: 'Natan Depes'
    }

    currentUser: Student;
    showHeader: boolean = false;
    authList: string[] = ['/', '/login', '/sign-up'];
    currentRoute: string;
    loggedIn: boolean;

    constructor(private router: Router) { }

    onLogin(){
        console.log('TESTE');
    }

    ngOnInit(): void {
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            this.currentRoute = event.url;

            if(this.authList.indexOf(this.currentRoute) == -1)
            {
                this.showHeader = true;
            }
            else
            {
                this.showHeader = false;
            }
           
        });
      }
}