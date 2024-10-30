import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private apiURL = 'https://67223f782108960b9cc3925b.mockapi.io/api/pessoas';

  constructor(private http: HttpClient) { }

  private dataSubject = new BehaviorSubject<any>(null);
  currentData = this.dataSubject.asObservable();

  updateData(data: any){
    this.dataSubject.next(data);
  }

  getPeople(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
}
