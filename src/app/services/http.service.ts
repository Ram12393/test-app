import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl: string;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    private storage: StorageService
  ) {
    this.baseUrl = environment.httpUrl;
  }


  addHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    if (this.storage.get('token')) {
      headers = headers.set(
        'X-Access-Token', this.storage.get('token')
      );
    }

    return headers;
  }


  get(resource: string): Observable<any> {
    const headers = this.addHeaders();
    const url = this.baseUrl + resource;
    return this.http.get(url,
      {
        headers
      });
  }

  post(resource: string, data: any): Observable<any> {
    const headers = this.addHeaders();
    const url = this.baseUrl + resource;
    return this.http.post(url, data,
      {
        headers,
      });
  }

  put(resource: string, data: any): Observable<any> {
    const headers = this.addHeaders();
    const url = this.baseUrl + resource;
    return this.http.put(url, data,
      {
        headers
      });
  }

  delete(resource: string): Observable<any> {
    const headers = this.addHeaders();
    const url = this.baseUrl + resource;
    return this.http.delete(url,
      {
        headers
      });
  }

}
