import { Component, OnInit } from '@angular/core';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { log } from 'console';
import   io, { Socket } from 'socket.io-client'
const SOCKET_ENDPOINT='localhost:3000'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  socket: any;

message:any

 
 
  constructor() { }
  ngOnInit() {
    this.setupSocketConnection();
  }
 
  SendMessage() {
    this.socket.emit('message', this.message);
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.style.background = 'white';
    element.style.padding =  '15px 30px';
    element.style.margin = '10px';
    element.style.textAlign = 'right';
    document.getElementById('message-list')?.appendChild(element);
    this.message = '';
 }
 setupSocketConnection() {
  this.socket = io(SOCKET_ENDPOINT);
  console.log(this.socket);
  
  this.socket.on('message-broadcast', (data: string) => {
    console.log(data);
    
  if (data) {
    console.log("data");
    
   const element = document.createElement('li');
   element.innerHTML = data;
   element.style.background = 'white';
   element.style.padding =  '15px 30px';
   element.style.margin = '10px';
   document.getElementById('message-list')?.appendChild(element);
   }
 });
}

}
