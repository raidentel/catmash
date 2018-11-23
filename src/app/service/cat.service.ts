import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cat} from '../model/cat';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CatService {

  

  constructor(private http: HttpClient) {}

  getCats() {
    return this.http.get('http://localhost:8080/api/')
                .toPromise()
                .then(res => <Cat[]> res)
                .then(data => { return data });
}

  getCatsForVote(){
    return this.http.get('http://localhost:8080/api/cats')
                .toPromise()
                .then(res => <Cat[]> res)
                .then(data => { return data });

      
  }


  voteOnTheCat(cat:any){

    console.log("here is call service", cat);
    return this.http.post("http://localhost:8080/api/cats/vote",cat ,httpOptions).toPromise().then(res => <Cat[]> res).then(data => { return data });


  }
}
