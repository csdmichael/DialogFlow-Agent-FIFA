import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // Matches the backend server URL
  private backendUrl = 'http://localhost:3000/send-message'; 

  constructor(private http: HttpClient) { }

  sendMessage(message: string, sessionId: string): Observable<{ text: string, intent: string }> {
    return this.http.post<{ text: string, intent: string }>(this.backendUrl, { message, sessionId });
  }
}
