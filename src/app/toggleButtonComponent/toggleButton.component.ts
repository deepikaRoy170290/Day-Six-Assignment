import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggleButton.component.html',
  styleUrls: ['./toggleButton.component.css']
})
export class ToggleButtonComponent  {
  @Output() changed = new EventEmitter<boolean>();
}
