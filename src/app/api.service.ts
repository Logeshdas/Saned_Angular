import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:  'root'
})

export  class  APIService {
    API_URL  =  'http://localhost:8083';
    
    constructor(private  httpClient:  HttpClient) {}
    createContact(contact){
        return  this.httpClient.post(`${this.API_URL}/register`,contact);
        
    }
    sendotp(contact){
        return  this.httpClient.post(`${this.API_URL}/emailotp`,contact);
        
    }

    login(contact){
        return  this.httpClient.post(`${this.API_URL}/login`,contact);
        
    }

    fetchContact(){
        return  this.httpClient.get(`${this.API_URL}/readUserData/`);
    }

    getRepoIssued(sort: string, order: string, page: number) {
        const href = 'https://api.github.com/search/issues';
        const requestUrl =
            `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    
        return this.httpClient.get(requestUrl);
      }

}