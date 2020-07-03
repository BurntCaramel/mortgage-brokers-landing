import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-multilined-text',
  templateUrl: './multilined-text.component.html',
  styleUrls: ['./multilined-text.component.css'],
  host: { class: 'stack', style: '--space-y: 1.4em' },
})
export class MultilinedTextComponent {
  @Input() text: string;
  @Input() class: string;

  @HostBinding('class') get hostClass(): string {
    return this.class;
  }

  get lines(): Array<string> {
    return this.text.split('\n\n');
  }
}
