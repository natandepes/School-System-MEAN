import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Student } from "../models-ts/student";

@Injectable()
export class AuthService {

    constructor(private http: Http) { }


    createUser(student: Student){

        const bodyReq = JSON.stringify(student);

        const headersReq = new Headers({'Content-Type' : 'application/json'});
        
        return this.http.post('http://localhost:3000/register', bodyReq, {headers: headersReq})
        .map((response: Response) => response.json())
        .catch((err: Response) => Observable.throw(err.json()));

    }

    getUsers(){

        return this.http.get('http://localhost:3000/register')
        .map((response: Response) => response.json())
        .catch((err: Response) => Observable.throw(err.json()));

    }


    mapUser(user: any){
        const st: Student = new Student();

        st.cpf = user.cpf;
        st.adress = user.adress;
        st.email = user.email;
        st.gender = user.gender;
        st.name = user.name;
        st.password = user.password;
        st.telephone = user.telephone;
        st._id = user._id;

        return st;
    }
}