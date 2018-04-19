import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Diary} from '../diary'
@Component({
  selector: 'app-diary-details',
  templateUrl: './diary-details.component.html',
  styleUrls: ['./diary-details.component.css']
})
export class DiaryDetailsComponent implements OnInit {

  @Input() entry:Diary;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteEntry(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
