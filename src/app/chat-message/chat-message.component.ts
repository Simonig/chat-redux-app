import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {MessageVM} from "../message-section/message.vm";

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent implements OnInit {

  @Input()
  message: MessageVM;

  constructor() {
  }

  ngOnInit() {
  }

}
