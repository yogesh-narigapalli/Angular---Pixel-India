import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  
url:string= "https://indian-cities-api-nocbegfhqg.now.sh"
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get(this.url+"/cities");
  }
getDistricts(stateSelected){
return this.http.get(`${this.url}/cities?State=${stateSelected}`);
}
sendSelectedDistrict(d){
  return this.http.get(`http://www.mapquestapi.com/geocoding/v1/address?key=87DyAFAROX1PTwGlMGfE2GTZbgkY0lJW&location=${d}`)
}
  
}
