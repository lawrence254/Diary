import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  entries = [
    new Diary(1, 'Test1', 'Sample Description 1', new Date(2000, 5, 2)),
    new Diary(2, 'Test2', 'Sample Description 2', new Date(2001, 5, 2)),
    new Diary(3, 'Get new Phone Case', 'Sample Description 3', new Date(2000, 5, 2)),
    new Diary(4, 'Get Dog Food', 'Sample Description 4', new Date(2000, 5, 2)),
    new Diary(5, 'Solve math homework', 'Sample Description 5', new Date(2000, 5, 2)),
    new Diary(6, 'Plot my world domination plan', 'Sample Description 6', new Date(2000, 5, 2)),
  ]

  toggleDetails(index){
    this.entries[index].showDetails = !this.entries[index].showDetails;
  }


  constructor() { }

  ngOnInit() {
  }

}
