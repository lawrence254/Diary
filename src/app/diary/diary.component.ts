import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  entries = [
    new Diary(1,'Test1','Sample Description',new Date(2000,5,2)),
    new Diary(2,'Test2','Sample Description',new Date(2001,5,2)),
  ]


  constructor() { }

  ngOnInit() {
  }

}
