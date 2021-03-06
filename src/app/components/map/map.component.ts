import { Component, OnInit, Input} from '@angular/core';
import {DataService } from '../../services/data.service';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  selectedState:string;
  filteredDistricts:any;
  randomDistricts:any;
  ranDistricts=[];
  uniqueDistricts:any;
  title:string;
  lat: number = 20.5937;
  lng:number =78.9629 ;
  zoom: number = 4;
  totalDistrictsLL =[];
  
  constructor(private data:DataService) {}
  ngOnInit(): void {}
  getSelected(e){
    this.selectedState=e;
    this.data.getDistricts(this.selectedState).subscribe(district=>{
      this.randomDistricts= district;
      this.ranDistricts=[];
      for(let district of this.randomDistricts){
        this.ranDistricts.unshift(district.District);
      }
      this.uniqueDistricts= [...new Set(this.ranDistricts)];
      this.filteredDistricts= this.uniqueDistricts;
      
      for(let one of this.filteredDistricts){
        this.totalDistrictsLL=[]
        this.data.sendSelectedDistrict(one).subscribe(dataOne=>{
          this.totalDistrictsLL.push({lat:dataOne.results[0].locations[0].displayLatLng.lat,lng:dataOne.results[0].locations[0].displayLatLng.lng});
          console.log(this.totalDistrictsLL);

        })
      }
    })
    
    
  }
getDistricts(e){
this.filteredDistricts=e;
console.log("hi");
}
onFinal(e){
  this.lat=e.results[0].locations[0].displayLatLng.lat;
  this.lng=e.results[0].locations[0].displayLatLng.lng;
  console.log(this.lat,this.lng)
}
}
