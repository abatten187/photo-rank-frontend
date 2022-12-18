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
        .getChallenge(this.challenge?.photoGroupId)
        .subscribe(challenge => this.challenge = challenge);
  }

  challengeResponse(uuid: string) {
    this.photoService
        .challengeResponse({
          nodeId: this.challenge.nodeId,
          pick: uuid
        })
        .subscribe( _ => this.getChallenge())
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 37) {
      this.challengeResponse(this.challenge.children[0].id)
    }

    if (event.keyCode === 39) {
      this.challengeResponse(this.challenge.children[1].id)
    }
  }
}
