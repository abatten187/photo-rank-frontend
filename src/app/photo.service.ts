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
    return this.http.get<Photo[]>("http://192.168.20.3:3000/matchup");
  }

  recordPreference(preference: string[]): Observable<void> {
    return this.http.post<void>("http://192.168.20.3:3000/preference", preference);
  }

  getRanking(): Observable<Photo[]> {
    return this.http.get<Photo[]>("http://192.168.20.3:3000/ranking");
  }
}
