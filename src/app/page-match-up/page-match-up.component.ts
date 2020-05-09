import { Component, HostListener, OnInit } from '@angular/core';
import { PhotoService } from "../photo.service";
import { Photo } from "../photo";
import { Challenge } from "../challenge";

@Component({
  selector: 'app-page-match-up',
  templateUrl: './page-match-up.component.html',
  styleUrls: ['./page-match-up.component.css']
})
export class PageMatchUpComponent implements OnInit {
  constructor(
      private photoService: PhotoService
  ) {}

  challenge: Challenge;

  ngOnInit() {
    this.getChallenge();
  }

  getChallenge(): void {
    this.photoService
        .getChallenge()
        .subscribe(challenge => this.challenge = challenge);
  }

  challengeResponse(uuid: string) {
    this.photoService
        .challengeResponse({
          node: this.challenge.node,
          pick: uuid
        })
        .subscribe( _ => this.getChallenge())
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 37) {
      this.challengeResponse(this.challenge.photos[0].id)
    }

    if (event.keyCode === 39) {
      this.challengeResponse(this.challenge.photos[1].id)
    }
  }
}
