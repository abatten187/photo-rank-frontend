import { Injectable } from '@angular/core';
import { Photo } from "./photo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
      private http: HttpClient
  ) { }

  getMatchUp(): Observable<Photo[]> {
    return this.http.get<Photo[]>("localhost:3000/matchup");
  }
}