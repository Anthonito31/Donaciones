import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly API_URL = 'https://api-nest.donaconamor.com/posts';

  posts:any[];

  constructor(private http: HttpClient) {
    this.posts = [];
  }

  get() {
    return this.http.get<any[]>(this.API_URL)
  }

}
