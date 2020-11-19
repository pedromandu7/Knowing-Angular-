import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url = 'http://localhost:3007/db';

  constructor(
    private http: HttpClient,
  ) { }

  getAllCoffess() {
    return this.http.get(this.url);
  }
}
