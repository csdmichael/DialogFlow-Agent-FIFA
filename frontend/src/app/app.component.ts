import { Component } from '@angular/core';
import { ChatService } from './chat.service';
// Note: You need to install 'uuid' for the frontend as well: npm install uuid @types/uuid
import { v4 as uuidv4 } from 'uuid';

interface Message {
  text: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userMessage: string = '';
  messages: Message[] = [];
  sessionId: string;

  constructor(private chatService: ChatService) {
    this.sessionId = uuidv4(); 
    this.messages.push({ 
      text: "Hello! I'm the FIFA World Cup 2026 Bot. How can I help you today?", 
      type: 'bot',
      timestamp: new Date()
    });
  }

  sendMessage() {
    const messageText = this.userMessage.trim();
    if (messageText === '') return;

    this.messages.push({ text: messageText, type: 'user', timestamp: new Date() });
    this.userMessage = '';

    this.chatService.sendMessage(messageText, this.sessionId).subscribe({
      next: (response) => {
        this.messages.push({ 
          text: response.text, 
          type: 'bot',
          timestamp: new Date()
        });
      },
      error: (err) => {
        console.error(err);
        this.messages.push({ text: 'Error connecting to the bot service.', type: 'bot', timestamp: new Date() });
      }
    });
  }
}
