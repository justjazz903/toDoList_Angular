import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public eventInput = ""
  public eventList = []

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    let event = {
      _id: this.eventList.length,
      name: this.eventInput,
      check: false,
      style: {}
    }
    this.eventList.push(event)
  }

  onCheck(event){
    event.check = !event.check
    event.style = event.check ? {"text-decoration": "line-through"} : {}
  }

  onDelete(event){
    this.eventList = this.eventList.filter((e) => {return e._id !== event._id})
  }

}
