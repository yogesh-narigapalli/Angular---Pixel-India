import { Component, OnInit, EventEmitter, Output, Input,OnChanges } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() selectedState:any;
  @Output() sendDistricts: EventEmitter<any> = new EventEmitter();
  @Output() fixDist: EventEmitter<any>= new EventEmitter();
  newDistrict:string;
  states:string;
  cities:string;
  randomDistricts:any=[];
  ranDistricts:any=[];
  uniqueDistricts:any=[];
  filteredDistricts:any=[];
  finalLat:number;
  finalLng:any;
  latLng:any=[];
  
  constructor(private data:DataService) {}
   ngOnChanges(){
     console.log("Hi");
     this.data.getDistricts(this.selectedState).subscribe(district=>{
      this.randomDistricts= district;
      this.ranDistricts=[];

      for(let district of this.randomDistricts){
        this.ranDistricts.push(district.District);
      }
      this.uniqueDistricts= [...new Set(this.ranDistricts)];
      this.sendDistricts.emit(this.uniqueDistricts);
      this.filteredDistricts=this.uniqueDistricts;
      
    })

   }
  ngOnInit() {}
  districtSelected(d){
    console.log(d);
    this.newDistrict=d;
    this.data.sendSelectedDistrict(d).subscribe(datas=>{
      console.log(datas);
      this.fixDist.emit(datas);
    })
  }
}
