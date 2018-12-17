import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiPostserviceService {
  API_URL  =  'http://localhost:3000';

  constructor(private  httpClient:  HttpClient) {}
  login(model){
    console.log("enter in to the api service")
      return  this.httpClient.post(`${this.API_URL}/login/`,model);
  }


}
