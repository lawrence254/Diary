import { Component, OnInit,Input } from '@angular/core';
import {Diary} from '../diary'
@Component({
  selector: 'app-diary-details',
  templateUrl: './diary-details.component.html',
  styleUrls: ['./diary-details.component.css']
})
export class DiaryDetailsComponent implements OnInit {

  @Input() entry:Diary;
  constructor() { }

  ngOnInit() {
  }

}
