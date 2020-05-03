import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from "../photo";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  @Input() photo: Photo;
  @Output() selected = new EventEmitter<void>();

  constructor() { }

  clicked() {
    this.selected.emit()
  }
}
