import { Injectable } from '@angular/core';
import { Photo } from "./photo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Challenge } from "./challenge";
import { ChallengeResponse } from "./challenge-response";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
      private http: HttpClient
  ) { }

  BASE_URL = "http://192.168.20.3:3000";

  getChallenge(): Observable<Challenge> {
    return this.http.get<Challenge>(`${(this.BASE_URL)}/challenge`);
  }

  challengeResponse(response: ChallengeResponse): Observable<void> {
    return this.http.post<void>(`${(this.BASE_URL)}/challenge`, response);
  }

  getRanking(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${(this.BASE_URL)}/ranking`);
  }
}
