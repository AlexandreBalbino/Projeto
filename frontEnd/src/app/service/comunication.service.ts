import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  constructor(private http: HttpClient,
    private messageService: MessageService) { }
}
