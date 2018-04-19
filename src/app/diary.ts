export class Diary {
  constructor(public id:number, public title:string, public details:string, public createDate:Date){
    this.showDetails:false;
  }
}
