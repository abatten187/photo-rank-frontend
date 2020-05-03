import { Component, OnInit } from '@angular/core';
import { PhotoService } from "../photo.service";
import { Photo } from "../photo";

@Component({
  selector: 'app-page-match-up',
  templateUrl: './page-match-up.component.html',
  styleUrls: ['./page-match-up.component.css']
})
export class PageMatchUpComponent implements OnInit {
  constructor(
      private photoService: PhotoService
  ) {}

  photos: Photo[];

  ngOnInit() {
    this.getMatchUp();
  }

  getMatchUp(): void {
    this.photoService
        .getMatchUp()
        .subscribe(photos => this.photos = photos);
  }

  recordPreference(uuid: string) {
    const preference = this.photos
        .map(p => p.id)
        .sort((a, b) => a == uuid ? -1 : 1);

    console.log(preference);

    this.photoService
        .recordPreference(preference)
        .subscribe( _ => this.getMatchUp())
  }
}
