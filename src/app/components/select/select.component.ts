import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Output() sendSelected: EventEmitter<any> = new EventEmitter();
  
  completeData=[];
  randomStates=[];
  uniqueStates=[];
  selectedState:string;
  
  constructor(private data:DataService) {
    this.data.getData().subscribe(info=>{
      this.completeData=info;
      // console.log(this.completeData);
      for(let state of this.completeData){
        this.randomStates.push(state.State);
      }
      this.uniqueStates= [...new Set(this.randomStates)];
      // console.log(this.uniqueStates);
    })
   }

  ngOnInit(): void {}
  sendState(selectedState){
    this.selectedState=selectedState;
    this.sendSelected.emit(selectedState);
    }

}
