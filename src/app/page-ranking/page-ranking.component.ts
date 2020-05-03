import { Component, OnInit } from '@angular/core';
import { PhotoService } from "../photo.service";
import { Photo } from "../photo";

@Component({
  selector: 'app-page-ranking',
  templateUrl: './page-ranking.component.html',
  styleUrls: ['./page-ranking.component.css']
})
export class PageRankingComponent implements OnInit {

  constructor(
      private photoService: PhotoService
  ) { }

  photos: Photo[];

  ngOnInit(): void {
    this.photoService
        .getRanking()
        .subscribe(photos => this.photos = photos);
  }

}
