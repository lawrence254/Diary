import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  entries = [
      new Diary(0,'Sample Title','Sample Description',new Date(2018,3,14) ),
  ]
  toggleDetails(index){
    this.entries[index].showDetails = !this.entries[index].showDetails;
  }
  deleteEntry(isComplete,index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete: ${this.entries[index].title}`)
      if (toDelete){
        this.entries.splice(index,1)
      }
    }
  }
  addNewEntry(entry){
      let entryLength = this.entries.length;
      entry.id=entryLength+1;
      entry.createDate = new Date(entry.createDate)
      this.entries.push(entry)

  }
  constructor() { }

  ngOnInit() {
  }

}
