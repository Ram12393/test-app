import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl: string;
  public token:string
  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
  ) {
    this.baseUrl = environment.httpUrl;
    this.token = localStorage.getItem('token');
  }


  addHeaders() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('X-Access-Token', this.token);
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
