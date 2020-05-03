import { Component, OnInit } from '@angular/core';
import { PhotoService } from "./photo.service";
import { Photo } from "./photo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
}
