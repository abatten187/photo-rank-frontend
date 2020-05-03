import { Component, Input, OnInit } from '@angular/core';
import { Photo } from "../photo";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  @Input() photo: Photo;

  constructor() { }
}
