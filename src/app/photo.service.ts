import { Injectable } from '@angular/core';
import { Photo } from "./photo";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Challenge } from "./challenge";
import { ChallengeResponse } from "./challenge-response";
import { Ranking } from "./ranking";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
      private http: HttpClient
  ) { }

  BASE_URL = "http://192.168.20.3:3000";

  getChallenge(photoGroupId: string): Observable<Challenge> {
    return this.http.get<Challenge>(`${(this.BASE_URL)}/challenge?photoGroupId=${photoGroupId}`);
  }

  challengeResponse(response: ChallengeResponse): Observable<void> {
    return this.http.post<void>(`${(this.BASE_URL)}/challenge`, response);
  }

  getRanking(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${(this.BASE_URL)}/ranking`);
  }
}
